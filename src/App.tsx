import { Header } from "./components/Header";
import { LoadingScreen } from "./components/LoadingScreen";
import { ParticleBackground } from "./components/ParticleBackground";
import { GameCard, GameCardProps } from "./components/GameCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Zap,
  Code,
  Cpu,
  Gamepad2,
  Database,
  Globe,
  Palette,
  Download,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

function App() {
  const [showAllGames, setShowAllGames] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Mock game data organized by engine
  const unityGames: GameCardProps[] = [
    {
      title: "Mystic Realms",
      description:
        "A fantasy RPG adventure featuring dynamic combat, character progression, and an immersive storyline set in a magical world.",
      image:
        "https://images.unsplash.com/photo-1698450998458-0bc1045788a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMHNjcmVlbnNob3R8ZW58MXx8fHwxNzYwMDI3ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: [
        "C#",
        "Unity",
        "Shader Graph",
        "Cinemachine",
      ],
      engine: "Unity",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Velocity Shift",
      description:
        "High-speed racing game with customizable vehicles, multiple tracks, and competitive multiplayer modes.",
      image:
        "https://images.unsplash.com/photo-1685039934357-c88f0c4aaa23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBnYW1lJTIwdHJhY2t8ZW58MXx8fHwxNzYwMDI3ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: [
        "C#",
        "Unity",
        "Physics",
        "Mirror Networking",
      ],
      engine: "Unity",
      demoLink: "#",
    },
  ];

  const unrealGames: GameCardProps[] = [
    {
      title: "Neon Horizon",
      description:
        "Cyberpunk third-person shooter with advanced AI enemies, destructible environments, and a branching narrative.",
      image:
        "https://images.unsplash.com/photo-1728198349686-c51f8899d2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBnYW1lJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzYwMDI3ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: [
        "C++",
        "Blueprints",
        "Niagara",
        "MetaHuman",
      ],
      engine: "Unreal Engine 5",
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const godotGames: GameCardProps[] = [
    {
      title: "Sky Runner",
      description:
        "2D platformer with precise movement mechanics, collectibles, and challenging level design.",
      image:
        "https://images.unsplash.com/photo-1758862493283-51f1e23b8883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybWVyJTIwZ2FtZSUyMGFydHxlbnwxfHx8fDE3NjAwMjc4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: [
        "GDScript",
        "Godot 4",
        "2D Physics",
        "Tilemap",
      ],
      engine: "Godot",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Block Breaker Deluxe",
      description:
        "Modern take on the classic puzzle game with power-ups, combo systems, and 100+ levels.",
      image:
        "https://images.unsplash.com/photo-1595707678349-4b3f482bfbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXp6bGUlMjBnYW1lJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYwMDEyOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: [
        "GDScript",
        "Godot 3.5",
        "Particle System",
      ],
      engine: "Godot",
      demoLink: "#",
    },
  ];

  const gameJamGames: GameCardProps[] = [
    {
      title: "Pixel Quest",
      description:
        "Created in 48 hours for Ludum Dare 52. A retro-style adventure game where you harvest resources to survive.",
      image:
        "https://images.unsplash.com/photo-1673350808686-209dc177c898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGdhbWUlMjBwaXhlbHxlbnwxfHx8fDE3NjAwMjc4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Unity", "C#", "Pixel Art"],
      engine: "Unity",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Time Loop Escape",
      description:
        "Global Game Jam 2024 submission. Puzzle platformer where you must use time manipulation to escape.",
      image:
        "https://images.unsplash.com/photo-1758862493283-51f1e23b8883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybWVyJTIwZ2FtZSUyMGFydHxlbnwxfHx8fDE3NjAwMjc4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Godot", "GDScript", "Shader"],
      engine: "Godot",
      demoLink: "#",
    },
    {
      title: "Space Debris Cleanup",
      description:
        "Mini Jam 142 entry. Strategic game about cleaning up space junk while managing fuel and resources.",
      image:
        "https://images.unsplash.com/photo-1728198349686-c51f8899d2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBnYW1lJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzYwMDI3ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Unity", "C#", "2D Physics"],
      engine: "Unity",
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const allGames = [
    ...unityGames,
    ...unrealGames,
    ...godotGames,
  ];

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div
          className="min-h-screen bg-background animated-gradient relative"
          style={{ cursor: "auto" }}
        >
          <ParticleBackground />
          <div
            className="relative z-10"
            style={{ cursor: "auto" }}
          >
            <Header />

            {/* Hero Section */}
            <section className="container mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32 particle-bg relative">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Name with character-by-character animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      textShadow: [
                        "0 0 30px rgba(168, 85, 247, 0.6)",
                        "0 0 40px rgba(192, 38, 211, 0.8)",
                        "0 0 30px rgba(168, 85, 247, 0.6)",
                      ],
                    }}
                    transition={{
                      opacity: { duration: 0.8, ease: "easeOut" },
                      y: { duration: 0.8, ease: "easeOut" },
                      textShadow: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse",
                        delay: 1
                      }
                    }}
                  >
                    {"Loïck Konieczny".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.05,
                          ease: "easeOut"
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.h1>

                  {/* Game Developer subtitle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8,
                      ease: "easeOut"
                    }}
                    className="text-xl md:text-2xl text-primary"
                  >
                    <motion.span
                      animate={{
                        opacity: [0.9, 1, 0.9],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse",
                        delay: 1.5
                      }}
                    >
                      Game Developer
                    </motion.span>
                  </motion.div>
                </motion.div>

                {/* Description paragraph */}
                <motion.p
                  className="text-muted-foreground text-lg max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                    ease: "easeOut"
                  }}
                >
                  Passionate game developer specializing in
                  Unity, Unreal Engine, and Godot. Creating
                  immersive experiences from concept to
                  completion.
                </motion.p>

                {/* Resume buttons */}
                <motion.div
                  className="flex flex-wrap justify-center gap-4 pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 1.5,
                    ease: "easeOut"
                  }}
                >
                  <Button size="lg" className="gap-2 cursor-pointer" asChild>
                    <a href="/resume-en.pdf" download className="cursor-pointer">
                      <Download className="w-5 h-5" />
                      Resume (English)
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 cursor-pointer"
                    asChild
                  >
                    <a href="/resume-fr.pdf" download className="cursor-pointer">
                      <Download className="w-5 h-5" />
                      CV (Français)
                    </a>
                  </Button>
                </motion.div>
              </div>
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 bg-muted/30 relative"
            >
              <div className="space-y-8">
                <motion.div
                  className="text-center space-y-2 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2>Featured Projects</h2>
                  <p className="text-muted-foreground">
                    Browse my portfolio of games organized by
                    game engine
                  </p>
                </motion.div>

                <Tabs
                  defaultValue={showAllGames ? "all" : "unity"}
                  className="w-full"
                >
                  <motion.div
                    className="flex justify-center mb-10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <TabsList className="grid grid-cols-4 w-full max-w-3xl gap-2 p-1.5">
                      <TabsTrigger
                        value="all"
                        onClick={() => setShowAllGames(true)}
                      >
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="w-4 h-4" />
                          <span>All Games</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        value="unity"
                        onClick={() => setShowAllGames(false)}
                      >
                        <div className="flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          <span>Unity</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        value="unreal"
                        onClick={() => setShowAllGames(false)}
                      >
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4" />
                          <span>Unreal</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        value="godot"
                        onClick={() => setShowAllGames(false)}
                      >
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          <span>Godot</span>
                        </div>
                      </TabsTrigger>
                    </TabsList>
                  </motion.div>

                  <TabsContent value="all" className="mt-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {allGames.map((game) => (
                        <GameCard key={game.title} {...game} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="unity" className="mt-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {unityGames.map((game) => (
                        <GameCard key={game.title} {...game} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="unreal" className="mt-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {unrealGames.map((game) => (
                        <GameCard key={game.title} {...game} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="godot" className="mt-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {godotGames.map((game) => (
                        <GameCard key={game.title} {...game} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </section>

            {/* Game Jams Section */}
            <section
              id="game-jams"
              className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 particle-bg relative"
            >
              <div className="space-y-8">
                <motion.div
                  className="text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2>Game Jam Projects</h2>
                  <p className="text-muted-foreground">
                    Fast-paced projects created during game jams
                    and competitions
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gameJamGames.map((game) => (
                    <GameCard key={game.title} {...game} />
                  ))}
                </div>
              </div>
            </section>

            {/* Technologies Section */}
            <section
              id="technologies"
              className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 bg-muted/30"
            >
              <div className="space-y-12">
                <motion.div
                  className="text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2>Technologies & Skills</h2>
                  <p className="text-muted-foreground">
                    Tools and technologies I use to bring games
                    to life
                  </p>
                </motion.div>

                {/* Game Development Technologies */}
                <div className="space-y-4">
                  <h3 className="text-center text-2xl text-primary">
                    Game Development
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {[
                      {
                        name: "Unity",
                        icon: Code,
                        url: "https://unity.com",
                      },
                      {
                        name: "Unreal Engine",
                        icon: Cpu,
                        url: "https://unrealengine.com",
                      },
                      {
                        name: "Godot",
                        icon: Zap,
                        url: "https://godotengine.org",
                      },
                      {
                        name: "C#",
                        icon: Code,
                        url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
                      },
                      {
                        name: "C++",
                        icon: Code,
                        url: "https://cplusplus.com",
                      },
                      {
                        name: "GDScript",
                        icon: Code,
                        url: "https://docs.godotengine.org",
                      },
                      {
                        name: "Git",
                        icon: Github,
                        url: "https://git-scm.com",
                      },
                      {
                        name: "GitHub",
                        icon: Github,
                        url: "https://github.com",
                      },
                      {
                        name: "Blender",
                        icon: Code,
                        url: "https://blender.org",
                      },
                      {
                        name: "Shader Graph",
                        icon: Zap,
                        url: "https://unity.com/features/shader-graph",
                      },
                      {
                        name: "Blueprints",
                        icon: Cpu,
                        url: "https://docs.unrealengine.com/blueprints",
                      },
                      {
                        name: "Physics",
                        icon: Gamepad2,
                        url: "#",
                      },
                    ].map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 hover:border-primary hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
                        style={{ willChange: "transform" }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        whileTap={{ scale: 0.98 }}
                        variants={{
                          rest: {
                            scale: 1,
                            rotateZ: 0,
                            y: 0,
                            transition: {
                              duration: 0.18,
                              ease: "easeOut",
                            },
                          },
                          hover: {
                            scale: 1.06,
                            rotateZ: 3,
                            y: -2,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 26,
                            },
                          },
                        }}
                        animate="rest"
                        whileHover="hover"
                        transition={{
                          duration: 0.35,
                          delay: index * 0.06,
                          ease: "easeOut",
                        }}
                      >
                        <motion.div
                          className="relative"
                          variants={{
                            rest: {
                              rotateZ: 0,
                              transition: {
                                duration: 0.12,
                                ease: "easeOut",
                              },
                            },
                            hover: {
                              rotateZ: -6,
                              transition: {
                                type: "spring",
                                stiffness: 280,
                                damping: 22,
                              },
                            },
                          }}
                          animate="rest"
                          whileHover="hover"
                        >
                          <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        </motion.div>
                        <span className="text-sm group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Other Technologies */}
                <div className="space-y-4 mt-16">
                  <h3 className="text-center text-2xl text-secondary">
                    Other Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {[
                      {
                        name: "React",
                        icon: Code,
                        url: "https://react.dev",
                      },
                      {
                        name: "TypeScript",
                        icon: Code,
                        url: "https://typescriptlang.org",
                      },
                      {
                        name: "JavaScript",
                        icon: Code,
                        url: "https://javascript.info",
                      },
                      {
                        name: "Tailwind CSS",
                        icon: Palette,
                        url: "https://tailwindcss.com",
                      },
                      {
                        name: "Node.js",
                        icon: Database,
                        url: "https://nodejs.org",
                      },
                      {
                        name: "Python",
                        icon: Code,
                        url: "https://python.org",
                      },
                      {
                        name: "SQL",
                        icon: Database,
                        url: "https://www.postgresql.org",
                      },
                      {
                        name: "REST APIs",
                        icon: Globe,
                        url: "https://restfulapi.net",
                      },
                      {
                        name: "Photoshop",
                        icon: Palette,
                        url: "https://www.adobe.com/products/photoshop.html",
                      },
                      {
                        name: "Figma",
                        icon: Palette,
                        url: "https://figma.com",
                      },
                      {
                        name: "VS Code",
                        icon: Code,
                        url: "https://code.visualstudio.com",
                      },
                      {
                        name: "UI/UX Design",
                        icon: Palette,
                        url: "#",
                      },
                    ].map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 cursor-pointer group"
                        style={{ willChange: "transform" }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        whileTap={{ scale: 0.98 }}
                        variants={{
                          rest: {
                            scale: 1,
                            rotateZ: 0,
                            y: 0,
                            transition: {
                              duration: 0.18,
                              ease: "easeOut",
                            },
                          },
                          hover: {
                            scale: 1.06,
                            rotateZ: 3,
                            y: -2,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 26,
                            },
                          },
                        }}
                        animate="rest"
                        whileHover="hover"
                        transition={{
                          duration: 0.35,
                          delay: index * 0.06,
                          ease: "easeOut",
                        }}
                      >
                        <motion.div
                          className="relative"
                          variants={{
                            rest: {
                              rotateZ: 0,
                              transition: {
                                duration: 0.12,
                                ease: "easeOut",
                              },
                            },
                            hover: {
                              rotateZ: -6,
                              transition: {
                                type: "spring",
                                stiffness: 280,
                                damping: 22,
                              },
                            },
                          }}
                          animate="rest"
                          whileHover="hover"
                          style={{ willChange: "transform" }}
                        >
                          <item.icon className="h-5 w-5 text-secondary flex-shrink-0" />
                        </motion.div>
                        <span className="text-sm group-hover:text-secondary transition-colors duration-300">
                          {item.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section
              id="about"
              className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24"
            >
              <motion.div
                className="max-w-3xl mx-auto space-y-6 bg-card p-8 rounded-lg border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-center">About Me</h2>
                <div className="space-y-4 text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    I'm a passionate game developer with
                    expertise in multiple game engines and
                    programming languages. My focus is on
                    creating engaging gameplay experiences,
                    optimizing performance, and bringing
                    creative visions to life.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    With experience in Unity, Unreal Engine, and
                    Godot, I can adapt to any project's needs. I
                    regularly participate in game jams to
                    sharpen my skills and explore new ideas.
                  </motion.p>
                </div>
              </motion.div>
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 particle-bg relative"
            >
              <div className="max-w-3xl mx-auto space-y-8">
                <motion.div
                  className="text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2>Get In Touch</h2>
                  <p className="text-muted-foreground">
                    Interested in collaborating? Let's connect!
                  </p>
                </motion.div>

                <motion.div
                  className="flex justify-center gap-4 flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      href: "mailto:your.email@example.com",
                    },
                    {
                      icon: Github,
                      label: "GitHub",
                      href: "https://github.com",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: "https://linkedin.com",
                    },
                    {
                      icon: Twitter,
                      label: "Twitter",
                      href: "https://twitter.com",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.1,
                      }}
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <item.icon className="mr-2 h-5 w-5" />
                          {item.label}
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t py-8">
              <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  © 2025 Game Developer Portfolio. All rights
                  reserved.
                </motion.p>
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default App;