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
import { ExternalLink, Github, X, Calendar, Users, Award, Info, Play } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Separator } from "./ui/separator";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export interface GameCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  engine: string;
  demoLink?: string;
  githubLink?: string;
  fullDescription?: string;
  features?: string[];
  role?: string;
  teamSize?: string;
  duration?: string;
  screenshots?: string[];
  videos?: string[];
}

export function GameCard({
  title,
  description,
  image,
  technologies,
  engine,
  demoLink,
  githubLink,
  fullDescription,
  features,
  role,
  teamSize,
  duration,
  screenshots,
  videos,
}: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Combine images and videos for carousel
  const mediaItems = [
    { type: 'image', src: image },
    ...(screenshots || []).map(src => ({ type: 'image', src })),
    ...(videos || []).map(src => ({ type: 'video', src })),
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.35 }}
        whileHover={{ y: -8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsDialogOpen(true)}
        className="cursor-pointer"
      >
        <Card
          className={`overflow-hidden flex flex-col h-full transition-all duration-300 cursor-pointer ${isHovered ? "border-glow" : ""}`}
        >
        <div className="aspect-video w-full overflow-hidden relative">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.22 }}
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
            transition={{ duration: 0.22 }}
            className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHovered ? 0 : 20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.22, delay: 0.1 }}
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
              className="transition-all duration-300"
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
              >
                <Badge variant="outline">{tech}</Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          {demoLink && (
            <Button
              size="sm"
              variant="default"
              asChild
              className="cursor-pointer"
            >
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
          )}
          {githubLink && (
            <Button
              size="sm"
              variant="outline"
              asChild
              className="cursor-pointer"
            >
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
          )}
        </CardFooter>
      </Card>
    </motion.div>

    {/* Project Details Modal */}
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="max-w-[95vw] w-[95vw] max-h-[90vh] overflow-y-auto border-primary/30 shadow-2xl shadow-primary/10">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-3xl mb-2 glow-text">{title}</DialogTitle>
              <DialogDescription className="text-base">
                {description}
              </DialogDescription>
            </div>
            <Badge variant="secondary" className="text-sm px-3 py-1 mt-1">
              {engine}
            </Badge>
          </div>
        </DialogHeader>

        <motion.div 
          className="space-y-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
        >
          {/* Media Carousel */}
          {mediaItems.length > 1 ? (
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h3 className="text-lg">Media Gallery</h3>
              </div>
              <Carousel 
                className="w-full"
                opts={{ 
                  loop: true,
                  align: "start"
                }}
                setApi={(api) => {
                  if (!api) return;
                  api.on('select', () => {
                    setCurrentSlide(api.selectedScrollSnap());
                  });
                }}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {mediaItems.map((item, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                      <motion.div 
                        className="relative aspect-video w-full overflow-hidden rounded-lg border border-border/50 bg-muted/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}
                      >
                        {item.type === 'image' ? (
                          <ImageWithFallback
                            src={item.src}
                            alt={`${title} - Media ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="relative w-full h-full group">
                            <video
                              controls
                              className="w-full h-full object-cover bg-black transition-transform duration-300"
                              poster={image}
                              preload="metadata"
                            >
                              <source src={item.src} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}
                        {/* Slide indicator */}
                        <div className="absolute bottom-3 right-3 pointer-events-none">
                          <Badge variant="secondary" className="text-xs bg-black/70 backdrop-blur-sm">
                            {index + 1} / {mediaItems.length}
                          </Badge>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 md:left-4 hidden sm:flex" />
                <CarouselNext className="right-2 md:right-4 hidden sm:flex" />
              </Carousel>
              {/* Carousel dots indicator and swipe hint */}
              <div className="flex flex-col items-center gap-2 pt-2">
                <div className="flex justify-center gap-2">
                  {mediaItems.map((_, index) => (
                    <motion.div
                      key={index}
                      className="h-1.5 rounded-full transition-all duration-300"
                      animate={{
                        width: index === currentSlide ? 24 : 6,
                        opacity: index === currentSlide ? 1 : 0.4,
                        backgroundColor: index === currentSlide ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
                      }}
                    />
                  ))}
                </div>
                {/* swipe hint removed for mobile */}
              </div>
            </div>
          ) : (
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-border/50">
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Project Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {role && (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border/50">
                <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p className="mt-1">{role}</p>
                </div>
              </div>
            )}
            {teamSize && (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border/50">
                <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Team Size</p>
                  <p className="mt-1">{teamSize}</p>
                </div>
              </div>
            )}
            {duration && (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border/50">
                <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="mt-1">{duration}</p>
                </div>
              </div>
            )}
          </div>

          {/* Full Description */}
          {fullDescription && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-lg">About This Project</h3>
              </div>
              {/* Responsive container: center content, limit width, and slightly scale on very small devices */}
              <div className="mx-auto w-full max-w-full sm:max-w-[28rem] md:max-w-[48rem] lg:max-w-[64rem] transform transition-transform duration-200 sm:scale-100 scale-95">
                <p className="text-muted-foreground leading-relaxed">
                  {fullDescription}
                </p>
              </div>
            </div>
          )}

          {/* Features */}
          {features && features.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">▸</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          <Separator />

          {/* Technologies */}
          <div className="space-y-3">
            <h3 className="text-lg">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Badge variant="outline" className="px-3 py-1">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {demoLink && (
              <Button size="lg" asChild className="cursor-pointer w-full sm:w-auto">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Demo
                </a>
              </Button>
            )}
            {githubLink && (
              <Button size="lg" variant="outline" asChild className="cursor-pointer w-full sm:w-auto">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
    </>
  );
}