import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState } from "react";

export interface GameCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  engine: string;
  demoLink?: string;
  githubLink?: string;
}

export function GameCard({
  title,
  description,
  image,
  technologies,
  engine,
  demoLink,
  githubLink,
}: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      <Card
        className={`overflow-hidden flex flex-col h-full transition-all duration-300 cursor-pointer ${isHovered ? "border-glow" : ""}`}
      >
        <div className="aspect-video w-full overflow-hidden relative">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHovered ? 0 : 20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-primary-foreground"
            >
              Click to explore
            </motion.p>
          </motion.div>
        </div>
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className={isHovered ? "glow-text" : ""}>
              {title}
            </CardTitle>
            <Badge
              variant="secondary"
              className="transition-all duration-300 hover:scale-110"
            >
              {engine}
            </Badge>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="outline">{tech}</Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          {demoLink && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="sm" variant="default" asChild className="cursor-pointer">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </motion.div>
          )}
          {githubLink && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="sm" variant="outline" asChild className="cursor-pointer">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}