import express from "express";
import cors from "cors";
import passport from "passport";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GithubStrategy } from "passport-github2";
import authRoutes from "./routes/auth.js";
import User from "./models/User.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  }),
);

// Passport OAuth
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.SERVER_URL || "http://localhost:4000"}/api/auth/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const emailObj = profile.emails?.[0];
          if (!emailObj?.value)
            return done(new Error("Google profile không có email"));

          let user = await User.findOne({
            provider: "google",
            providerId: profile.id,
          });
          if (!user) {
            user = await User.findOne({ email: emailObj.value });
          }

          if (!user) {
            user = new User({
              name: profile.displayName || "Người dùng Google",
              email: emailObj.value,
              provider: "google",
              providerId: profile.id,
            });
            await user.save();
          }

          done(null, user);
        } catch (error) {
          done(error);
        }
      },
    ),
  );
} else {
  console.warn("Google OAuth disabled because GOOGLE_CLIENT_ID/SECRET missing");
}

if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: `${process.env.SERVER_URL || "http://localhost:4000"}/api/auth/github/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value;
          if (!email) return done(new Error("Github profile không có email"));

          let user = await User.findOne({
            provider: "github",
            providerId: profile.id,
          });
          if (!user) {
            user = await User.findOne({ email });
          }

          if (!user) {
            user = new User({
              name:
                profile.displayName || profile.username || "Người dùng Github",
              email,
              provider: "github",
              providerId: profile.id,
            });
            await user.save();
          }

          done(null, user);
        } catch (error) {
          done(error);
        }
      },
    ),
  );
} else {
  console.warn("Github OAuth disabled because GITHUB_CLIENT_ID/SECRET missing");
}

app.use(passport.initialize());

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.json({ message: "Vase backend is running" }));

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/vase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Backend running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
    process.exit(1);
  });
