import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "dev.ulgaa@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-4 py-3 text-sm text-white text-center rounded-full font-light bg-primary w-48 cursor-pointer overflow-hidden"
      aria-label="Copy email address to clipboard"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="copied"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <Image
              src="/assets/copy-done.svg"
              width={20}
              height={20}
              alt="Copy done icon"
            />
            Email Address Copied
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Image
              src="/assets/copy.svg"
              width={20}
              height={20}
              alt="Copy icon"
            />
            Copy Email Address
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
