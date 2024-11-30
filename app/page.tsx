'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { motion } from 'framer-motion';

export default function HorrorComponent() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="horror-container">
        <video autoPlay loop muted className="background-video">
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="horror-text"
        >
          Loading your nightmares... 👻
        </motion.h1>
      </div>
    );
  }

  if (session) {
    return (
      <div className="horror-container">
        <video autoPlay loop muted className="background-video">
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="horror-text"
        >
            Welcome Back to the Nightmare 🔪
        </motion.h1>
        <p className="horror-text">Signed in as {session.user?.email}</p>
        <motion.button
          onClick={() => signOut()}
          className="horror-button"
          whileHover={{ scale: 1.1, backgroundColor: 'crimson' }}
        >
          Escape (Sign Out) 💀
        </motion.button>
      </div>
    );
  }

  return (
    <div className="horror-container">
      <video autoPlay loop muted className="background-video">
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="horror-text"
      >
         Enter the Darkness 
      </motion.h1>
      <p className="horror-text">Not signed in</p>
      <motion.button
        onClick={() => signIn()}
        className="horror-button"
        whileHover={{ scale: 1.2, boxShadow: '0 0 20px crimson' }}
      >
        Sign in if you dare... 🩸
      </motion.button>
    </div>
  );
}
