import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";

export default function BackboneBlock({ title, value, description, emoji, color, index, totalBlocks }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Determine slide direction (alternate left/right)
  const slideFrom = index % 2 === 0 ? -100 : 100;
  
  return (
    <div ref={ref} className="relative">
      {/* Connecting Line - draws from bottom of previous block */}
      {index > 0 && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-500 to-transparent"
          style={{
            height: '24px',
            top: '-24px'
          }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
        />
      )}
      
      <motion.div
        initial={{ x: slideFrom, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: slideFrom, opacity: 0 }}
        transition={{ duration: 0.8, delay: index * 0.3 }}
      >
        <Card className={`bg-gradient-to-br ${color} border-none shadow-xl`}>
          <CardContent className="p-8">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <motion.h3 
                  className="text-2xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.4 }}
                >
                  {title}
                </motion.h3>
                <motion.p 
                  className="font-semibold text-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: [0.9, 1.05, 1],
                  } : { opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.3 + 0.6,
                    scale: {
                      times: [0, 0.5, 1],
                      duration: 0.6
                    }
                  }}
                >
                  {value}
                </motion.p>
                <motion.p 
                  className="mt-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.8 }}
                >
                  {description}
                </motion.p>
              </div>
              <motion.div 
                className="text-5xl"
                initial={{ opacity: 0, rotate: -20, scale: 0 }}
                animate={isInView ? { 
                  opacity: 1, 
                  rotate: 0, 
                  scale: 1 
                } : { opacity: 0, rotate: -20, scale: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.3 + 0.5,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {emoji}
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}