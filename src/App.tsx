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
  Gamepad2,
  Database,
  Download,
  Boxes,
} from "lucide-react";
import UnityIcon from "./components/icons/UnityIcon";
import UnrealIcon from "./components/icons/UnrealIcon";
import CsharpIcon from "./components/icons/CsharpIcon";
import CppIcon from "./components/icons/CppIcon";
import GitIcon from "./components/icons/GitIcon";
import GithubIcon from "./components/icons/GithubIcon";
import BlenderIcon from "./components/icons/BlenderIcon";
import HtmlIcon from "./components/icons/HtmlIcon";
import CssIcon from "./components/icons/CssIcon";
import JavascriptIcon from "./components/icons/JavascriptIcon";
import NodeIcon from "./components/icons/NodeIcon";
import NpmIcon from "./components/icons/NpmIcon";
import PerforceIcon from "./components/icons/PerforceIcon";
import PhotoshopIcon from "./components/icons/PhotoshopIcon";
import PythonIcon from "./components/icons/PythonIcon";
import SassIcon from "./components/icons/SassIcon";
import VisualIcon from "./components/icons/VisualIcon";
import VscodeIcon from "./components/icons/VscodeIcon";
import FigmaIcon from "./components/icons/FigmaIcon";
import DiversionIcon from "./components/icons/DiversionIcon";
import MongoIcon from "./components/icons/MongoIcon";
import FirebaseIcon from "./components/icons/FirebaseIcon";
import HoudiniIcon from "./components/icons/HoudiniIcon";
import ClionIcon from "./components/icons/ClionIcon";
import Max3DIcon from "./components/icons/Max3DIcon";
import JavaIcon from "./components/icons/JavaIcon";

// Thumbnails

// Unity games
import NeonPuseThumb from "./assets/thumbnails/project/Neon_Pulse/Neon_Pulse_Thumbnail_1.png";
import SpaceAdventureThumb from "./assets/thumbnails/project/SpaceAdventure/SpaceAdventure_Thumbnail_1.png";
import SpaceAdventureVideo from "./assets/thumbnails/project/SpaceAdventure/SpaceAdventure_Thumbnail_2.mp4";
import NeonPuseVideo from "./assets/thumbnails/project/Neon_Pulse/Neon_Pulse_Thumbnail_2.mp4";

// Unreal Engine games
import BiogenThumb from "./assets/thumbnails/project/Biogen/Biogen_Thumbnail_1.png";
import IndianaThumb from "./assets/thumbnails/project/Indiana/Indiana_Thumbnail_1.png";
import SpeedyBurgerThumb from "./assets/thumbnails/project/SpeedyBurger/SpeedyBurger_Thumbnail_1.png";
import SpeedyBurgerThumb2 from "./assets/thumbnails/project/SpeedyBurger/SpeedyBurger_Thumbnail_2.jpg";

// Game Jam games
import BubblePopThumb from "./assets/thumbnails/gamejam/Bubble_Pop/Bubble_Pop_Thumbnail_1.png";
import BubblePopThumb2 from "./assets/thumbnails/gamejam/Bubble_Pop/Bubble_Pop_Thumbnail_2.png";
import BubblePopThumb3 from "./assets/thumbnails/gamejam/Bubble_Pop/Bubble_Pop_Thumbnail_3.png";
import BubblePopThumb4 from "./assets/thumbnails/gamejam/Bubble_Pop/Bubble_Pop_Thumbnail_4.png";
import TLifeThumb from "./assets/thumbnails/gamejam/TLife/TLife_Thumbnail_1.png";
import TLifeThumb2 from "./assets/thumbnails/gamejam/TLife/TLife_Thumbnail_2.png";
import TLifeThumb3 from "./assets/thumbnails/gamejam/TLife/TLife_Thumbnail_3.png";
import TLifeThumb4 from "./assets/thumbnails/gamejam/TLife/TLife_Thumbnail_4.png";

import { Button } from "./components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

function App() {
  const [showAllGames, setShowAllGames] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [topDone, setTopDone] = useState(false);

  // Mock game data organized by engine
  const unityGames: GameCardProps[] = [
    {
      title: "Space Adventure",
      description:
            "Space Adventure is a third-person shooter set in space. Face enemies, collect new weapons, and escape.",
      image: SpaceAdventureThumb,
      technologies: [
        "C#",
        "Unity",
        "AI Behavior",
        "State Machines",
        "Cinemachine",
      ],
      engine: "Unity",
      demoLink: "#",
      githubLink: "https://github.com/Wizi8914/UnityTPSGame",
      fullDescription: "Space Adventure is an immersive third-person shooter that takes players on an epic journey through the cosmos. Navigate through hostile environments, engage in intense combat with AI-controlled enemies, and discover powerful weapons to aid your escape. The game features advanced AI behavior systems and smooth camera work powered by Cinemachine.",
      features: [
        "Dynamic enemy AI with multiple behavior states",
        "Weapon system with multiple gun types",
        "Cinematic camera movements and transitions",
        "Immersive space environments",
        "State machine-based character controller",
        "Progressive difficulty system"
      ],
      role: "Solo Developer",
      teamSize: "1",
      duration: "3 months",
      screenshots: [
        "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop",
      ],
      videos: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        SpaceAdventureVideo,
      ],
    },
    {
      title: "Neon Pulse",
      description:
        "Neon Pulse is a mobile rhythm game where you control a car in a Synthwave universe. Several music tracks are available. ",
      image: NeonPuseThumb,
      technologies: [
        "C#",
        "Unity",
        "Engine Editing",
      ],
      engine: "Unity",
      demoLink: "#",
      githubLink: "https://github.com/Wizi8914/Neon-Pulse",
      fullDescription: "Neon Pulse brings the vibrant aesthetics of Synthwave to mobile rhythm gaming. Drive through neon-lit highways while matching beats and avoiding obstacles. The game features custom engine modifications for optimal mobile performance and an engaging visual experience that captures the essence of retro-futuristic aesthetics.",
      features: [
        "Multiple original Synthwave music tracks",
        "Responsive rhythm-based gameplay mechanics",
        "Stunning neon visual effects",
        "Mobile-optimized performance",
        "Progressive difficulty curve",
        "Custom audio synchronization system"
      ],
      role: "Game Designer & Developer",
      teamSize: "2",
      duration: "2 months",
      screenshots: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&auto=format&fit=crop",
      ],
      videos: [NeonPuseVideo],
    },
  ];

  const unrealGames: GameCardProps[] = [
    {
      title: "Speedy Burger",
      description: "Speedy Burger is a cooperative game using a customized controller. Your goal is to complete fast food orders. Pay close attention to the orders!",
      image: SpeedyBurgerThumb,
      technologies: [
        "Blueprint",
        "Alternative Controllers",
        "Data Table",
        "Shaders"
      ],
      engine: "Unreal Engine 5",
      demoLink: "#",
      fullDescription: "Speedy Burger is an innovative cooperative cooking game that uses custom-built physical controllers to create a unique arcade-style experience. Players must work together to prepare fast food orders accurately and quickly, managing ingredients and cooking stations while racing against the clock.",
      features: [
        "Custom physical controller integration",
        "Cooperative multiplayer gameplay",
        "Dynamic order generation system",
        "Data-driven ingredient and recipe system",
        "Custom shader effects for food visuals",
        "Time-based scoring mechanism"
      ],
      role: "Gameplay Programmer",
      teamSize: "4",
      duration: "4 months",
      screenshots: [
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&auto=format&fit=crop",
        SpeedyBurgerThumb2,
      ],
      videos: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ],
    },
    {
      title: "Temple escape",
      description: "Temple Escape is a local multiplayer game for up to 4 players that is based on the concept of a Mario Party mini-game with an Indiana Jones theme.",
      image: IndianaThumb,
      technologies: [
        "Blueprint",
        "Local Multiplayer",
      ],
      engine: "Unreal Engine 5",
      demoLink: "#",
      fullDescription: "Temple Escape is a fast-paced party game where up to 4 players compete in an Indiana Jones-inspired temple escape challenge. Navigate treacherous traps, solve quick puzzles, and race against your friends in this action-packed mini-game experience.",
      features: [
        "Up to 4 player local multiplayer",
        "Dynamic trap and hazard system",
        "Competitive scoring system",
        "Indiana Jones-themed environment",
        "Quick-match gameplay sessions",
        "Blueprint-based game logic"
      ],
      role: "Game Developer",
      teamSize: "3",
      duration: "2 months",
      screenshots: [
        "https://images.unsplash.com/photo-1663997605629-60d3d25a618c?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&auto=format&fit=crop",
      ],
    },
    {
      title: "Biogen",
      description: "Biogen is a school project that aimed to create an advanced user interface on Unreal, with a HUD and a skill tree.",
      image: BiogenThumb,
      technologies: [
        "Blueprint",
        "Widgets",
      ],
      engine: "Unreal Engine 5",
      demoLink: "#",
      fullDescription: "Biogen showcases advanced UI/UX design in Unreal Engine 5, featuring a sophisticated HUD system and an interactive skill tree. This project demonstrates proficiency in creating complex user interfaces using UMG (Unreal Motion Graphics) and Widget Blueprints.",
      features: [
        "Advanced HUD with real-time updates",
        "Interactive skill tree system",
        "Dynamic widget animations",
        "Custom UI components",
        "Data-driven progression system",
        "Responsive interface design"
      ],
      role: "UI/UX Developer",
      teamSize: "2",
      duration: "6 weeks",
    },
  ];

  // Godot projects removed per request

  const gameJamGames: GameCardProps[] = [
    {
      title: "Bubble Pop",
      description:
        "Created in 48 hours for the 2025 Global Game Jam. A horror game set in a bubble wrap factory. Your goal is to escape without getting caught by the monster. Be careful not to step on the bubble wrap!",
      image: BubblePopThumb,
      fullDescription: "Bubble Pop is a tension-filled horror game created during the 48-hour Global Game Jam 2025. Set in an eerie bubble wrap factory, players must navigate through dark corridors while avoiding a terrifying monster. Every step must be carefully planned - stepping on bubble wrap will alert the monster to your location. The game combines stealth mechanics with environmental awareness in a unique and suspenseful experience.",
      features: [
        "Stealth-based horror gameplay",
        "Audio-reactive AI enemy",
        "Environmental hazard mechanics",
        "Atmospheric factory setting",
        "Tension-building sound design",
        "Created in 48 hours"
      ],
      role: "Game Designer & Programmer",
      teamSize: "4",
      duration: "48 hours",
      technologies: ["Blueprint", "AI Behavior"],
      engine: "Unreal Engine 5",
      demoLink: "https://globalgamejam.org/games/2025/bubble-pop-5-0",
      screenshots: [BubblePopThumb2, BubblePopThumb3, BubblePopThumb4],
    },
    {
      title: "T-Life",
      description:
        "T-Life is a game created during the 2024 Global Game Jam. You must help a dinosaur named Gilbert accomplish everyday tasks that are difficult for him with his short arms.",
      image: TLifeThumb,
      technologies: ["C#", "2D"],
      engine: "Unity",
      demoLink: "https://globalgamejam.org/games/2024/t-life-4",
      githubLink: "https://github.com/Wizi8914/TLife",
      fullDescription: "T-Life is a charming and humorous 2D game created during the 2024 Global Game Jam. Players help Gilbert, a loveable T-Rex, navigate daily life despite the challenges posed by his characteristically short arms. The game combines puzzle-solving with physics-based mechanics to create entertaining scenarios that highlight Gilbert's struggle with everyday tasks.",
      features: [
        "Physics-based puzzle mechanics",
        "Charming 2D character animations",
        "Multiple everyday task challenges",
        "Humorous T-Rex character design",
        "Creative problem-solving gameplay",
        "Made in 48 hours"
      ],
      role: "Developer & Animator",
      teamSize: "3",
      duration: "48 hours",
      screenshots: [TLifeThumb2, TLifeThumb3, TLifeThumb4],
    },
  ];

  const allGames = [
    ...unityGames,
    ...unrealGames,
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
                  transition={{ duration: 0.35 }}
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
                          duration: 0.35,
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
                      duration: 0.45,
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
                    duration: 0.6,
                    delay: 1.2,
                    ease: "easeOut"
                  }}
                >
                  Student passionate about video game development, specializing in Unreal Engine and Unity. I love learning new things and creating engaging gaming experiences.
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
                    duration: 0.6,
                    delay: 1.5,
                    ease: "easeOut"
                  }}
                  onAnimationComplete={() => setTopDone(true)}
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
            <motion.section
              id="projects"
              className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 bg-muted/30 relative"
              initial={{ opacity: 0, y: 20, pointerEvents: "none" }}
              animate={topDone ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: 20, pointerEvents: "none" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
                    <TabsList className="flex w-full max-w-3xl gap-2 p-1.5 justify-center">
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
                          <UnityIcon className="w-4 h-4" />
                          <span>Unity</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        value="unreal"
                        onClick={() => setShowAllGames(false)}
                      >
                        <div className="flex items-center gap-2">
                          <UnrealIcon className="w-4 h-4" />
                          <span>Unreal</span>
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
                </Tabs>
              </div>
            </motion.section>

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
                        icon: UnityIcon,
                        url: "https://unity.com",
                      },
                      {
                        name: "Unreal Engine",
                        icon: UnrealIcon,
                        url: "https://unrealengine.com",
                      },
                      {
                        name: "C#",
                        icon: CsharpIcon,
                        url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
                      },
                      {
                        name: "Blueprints",
                        icon: Boxes,
                        url: "https://docs.unrealengine.com/blueprints",
                      },
                      {
                        name: "C++",
                        icon: CppIcon,
                        url: "https://cplusplus.com",
                      },
                      {
                        name: "Git",
                        icon: GitIcon,
                        url: "https://git-scm.com",
                      },
                      {
                        name: "GitHub",
                        icon: GithubIcon,
                        url: "https://github.com",
                      },
                      {
                        name: "Diversion",
                        icon: DiversionIcon,
                        url: "https://diversion.dev",
                      },
                      {
                        name: "Perforce",
                        icon: PerforceIcon,
                        url: "https://www.perforce.com",
                      },
                      {
                        name: "VS Code",
                        icon: VscodeIcon,
                        url: "https://code.visualstudio.com",
                      },
                      {
                        name: "Visual Studio",
                        icon: VisualIcon,
                        url: "https://visualstudio.microsoft.com",
                      },
                      {
                        name: "CLion",
                        icon: ClionIcon,
                        url: "https://www.jetbrains.com/clion/",
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
                          {typeof item.icon === "string" ? (
                            <img src={item.icon} alt={`${item.name} logo`} className="h-5 w-5 flex-shrink-0" />
                          ) : (
                            <item.icon className="h-5 w-5 flex-shrink-0" />
                          )}
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
                        name: "HTML",
                        icon: HtmlIcon,
                        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                      },
                      {
                        name: "CSS",
                        icon: CssIcon,
                        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                      },
                      {
                        name: "Sass",
                        icon: SassIcon,
                        url: "https://sass-lang.com",
                      },
                      {
                        name: "JavaScript",
                        icon: JavascriptIcon,
                        url: "https://javascript.info",
                      },
                      {
                        name: "NPM",
                        icon: NpmIcon,
                        url: "https://www.npmjs.com",
                      },
                      {
                        name: "Node.js",
                        icon: NodeIcon,
                        url: "https://nodejs.org",
                      },
                      {
                        name: "Python",
                        icon: PythonIcon,
                        url: "https://python.org",
                      },
                      {
                        name: "Java",
                        icon: JavaIcon,
                        url: "https://www.java.com",
                      },
                      {
                        name: "MongoDB",
                        icon: MongoIcon,
                        url: "https://www.mongodb.com",
                      },
                      {
                        name: "Firebase",
                        icon: FirebaseIcon,
                        url: "https://firebase.google.com",
                      },
                      {
                        name: "SQL",
                        icon: Database,
                        url: "https://www.postgresql.org",
                      },
                      {
                        name: "Photoshop",
                        icon: PhotoshopIcon,
                        url: "https://www.adobe.com/products/photoshop.html",
                      },
                      {
                        name: "Figma",
                        icon: FigmaIcon,
                        url: "https://figma.com",
                      },
                      {
                        name: "Blender",
                        icon: BlenderIcon,
                        url: "https://blender.org",
                      },
                      {
                        name: "3ds Max",
                        icon: Max3DIcon,
                        url: "https://www.autodesk.com/products/3ds-max/overview",
                      },
                      {
                        name: "Houdini",
                        icon: HoudiniIcon,
                        url: "https://www.sidefx.com",
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
                          <item.icon className="h-5 w-5 flex-shrink-0" />
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
                    I am a passionate game developer, working with several game engines and programming languages. I love learning new things and optimizing my code and games. 
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    With my experience with Unity, Unreal Engine, and other projects, I can adapt to the needs of any project. I am a quick learner, whether it's an engine, a language, or software. 
                    I try to participate in game jams to hone my skills and explore new ideas.
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
                    Would you like to get in touch ? 
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
                      href: "mailto:loick.konieczny@gmail.com",
                    },
                    {
                      icon: Github,
                      label: "GitHub",
                      href: "https://github.com/Wizi8914",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/loïck-konieczny-720594291",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
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
            <footer className="border-t py-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  © 2025 Loïck Konieczny — All rights reserved.
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