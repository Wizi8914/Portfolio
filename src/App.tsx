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
import { Mail, Linkedin, Github, Gamepad2, Download, Database, Boxes } from "lucide-react";
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
import NeonPuseThumb2 from "./assets/thumbnails/project/Neon_Pulse/Neon_Pulse_Thumbnail_2.png";
import NeonPuseThumb3 from "./assets/thumbnails/project/Neon_Pulse/Neon_Pulse_Thumbnail_3.png";
import NeonPuseVideo from "./assets/thumbnails/project/Neon_Pulse/Neon_Pulse_Thumbnail_4.mp4";

import SpaceAdventureThumb from "./assets/thumbnails/project/SpaceAdventure/SpaceAdventure_Thumbnail_1.png";
import SpaceAdventureThumb2 from "./assets/thumbnails/project/SpaceAdventure/SpaceAdventure_Thumbnail_2.png";
import SpaceAdventureThumb3 from "./assets/thumbnails/project/SpaceAdventure/SpaceAdventure_Thumbnail_3.png";
import SpaceAdventureThumb4 from "./assets/thumbnails/project/SpaceAdventure/SpaceAdventure_Thumbnail_4.png";
import SpaceAdventureThumb5 from "./assets/thumbnails/project/SpaceAdventure/SpaceAdventure_Thumbnail_5.png";
import SpaceAdventureVideo from "./assets/thumbnails/project/SpaceAdventure/SpaceAdventure_Thumbnail_6.mp4";

// Unreal Engine games
import BiogenThumb from "./assets/thumbnails/project/Biogen/Biogen_Thumbnail_1.png";
import BiogenThumb2 from "./assets/thumbnails/project/Biogen/Biogen_Thumbnail_2.png";
import BiogenThumb3 from "./assets/thumbnails/project/Biogen/Biogen_Thumbnail_3.png";
import BiogenThumb4 from "./assets/thumbnails/project/Biogen/Biogen_Thumbnail_4.png";

import IndianaThumb from "./assets/thumbnails/project/Indiana/Indiana_Thumbnail_1.png";
import IndianaThumb2 from "./assets/thumbnails/project/Indiana/Indiana_Thumbnail_2.png";
import IndianaThumb3 from "./assets/thumbnails/project/Indiana/Indiana_Thumbnail_3.png";
import IndianaVideo from "./assets/thumbnails/project/Indiana/Indiana_Thumbnail_4.mp4";

import SpeedyBurgerThumb from "./assets/thumbnails/project/SpeedyBurger/SpeedyBurger_Thumbnail_1.png";
import SpeedyBurgerThumb2 from "./assets/thumbnails/project/SpeedyBurger/SpeedyBurger_Thumbnail_2.jpg";
import SpeedyBurgerThumb3 from "./assets/thumbnails/project/SpeedyBurger/SpeedyBurger_Thumbnail_3.png";
import SpeedyBurgerThumb4 from "./assets/thumbnails/project/SpeedyBurger/SpeedyBurger_Thumbnail_4.png";
import SpeedyBurgerThumb5 from "./assets/thumbnails/project/SpeedyBurger/SpeedyBurger_Thumbnail_5.png";
import SpeedyBurgerThumb6 from "./assets/thumbnails/project/SpeedyBurger/SpeedyBurger_Thumbnail_6.png";
import SpeedyBurgerThumb7 from "./assets/thumbnails/project/SpeedyBurger/SpeedyBurger_Thumbnail_7.png";
import SpeedyBurgerThumb8 from "./assets/thumbnails/project/SpeedyBurger/SpeedyBurger_Thumbnail_8.png";

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
        "Cinemachine"
      ],
      engine: "Unity",
      demoLink: "https://drive.google.com/drive/folders/1Et6yexjTntarJZGZo0YzrlCVdqVwQjsF?usp=sharing",
      githubLink: "https://github.com/Wizi8914/UnityTPSGame",
      fullDescription: "Space Adventure is a third-person shooter game. Navigate hostile environments, engage in combat with AI-controlled enemies, and discover powerful weapons to help you escape. The game features advanced AI behavioral systems.",
      features: [
        "Dynamic enemy AI with multiple behavior states",
        "Weapon system with multiple gun types",
        "Cinematic camera movements and transitions",
        "State machine-based character controller",
      ],
      role: "Solo Developer",
      teamSize: "1",
      duration: "1 month",
      screenshots: [
        SpaceAdventureThumb2,
        SpaceAdventureThumb3,
        SpaceAdventureThumb4,
        SpaceAdventureThumb5,
      ],
      videos: [SpaceAdventureVideo],
    },
    {
      title: "Neon Pulse",
      description:
        "Neon Pulse is a mobile rhythm game where you control a car in a Synthwave universe. Several music tracks are available. All elements of the game were created by the team within the allotted time.",
      image: NeonPuseThumb,
      technologies: [
        "C#",
        "Unity",
        "Engine Editing",
        "Level Saving"
      ],
      engine: "Unity",
      demoLink: "https://drive.google.com/drive/folders/16-oXjEEIa095NG2Pf2lP0_zq4XK10l_g?usp=sharing",
      githubLink: "https://github.com/Wizi8914/Neon-Pulse",
      fullDescription: "Neon Pulse brings the vibrant aesthetics of Synthwave to mobile rhythm games. Drive down neon-lit highways while following the beat and avoiding obstacles. Get the highest score !",
      features: [
        "Multiple original Synthwave music tracks",
        "Responsive rhythm-based gameplay mechanics",
        "Unique synthwave environment",
        "Progressive difficulty curve",
        "Audio synchronization system"
      ],
      role: "Developer",
      teamSize: "7",
      duration: "4 days",
      screenshots: [NeonPuseThumb2, NeonPuseThumb3],
      videos: [
        NeonPuseVideo,
      ],
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
      demoLink: "https://drive.google.com/drive/folders/1ZCo3Mfx2S82XcweBFcGiPsGwbR9c_nqd?usp=sharing",
      fullDescription: "Speedy Burger is a cooperative game in which players prepare orders in a fast food restaurant. The game is played by two players using a custom controller representing all the available elements. Work together to get the best score and make it onto the leaderboard. ",
      features: [
        "Custom physical controller integration",
        "Cooperative gameplay",
        "Dynamic order generation system",
        "Custom shader effects for food visuals",
        "Time-based scoring mechanism"
      ],
      role: "Gameplay Programmer",
      teamSize: "9",
      duration: "4 days",
      screenshots: [
        SpeedyBurgerThumb2,
        SpeedyBurgerThumb3,
        SpeedyBurgerThumb4,
        SpeedyBurgerThumb5,
        SpeedyBurgerThumb6,
        SpeedyBurgerThumb7,
        SpeedyBurgerThumb8,
      ]
    },
    {
      title: "Temple escape",
      description: "Temple Escape is a local multiplayer game for up to 4 players that is based on the concept of a Mario Party mini-game with an Indiana Jones theme.",
      image: IndianaThumb,
      technologies: [
        "Blueprint",
        "Local Multiplayer",
        "Chunking",
        "Level Streaming",
      ],
      engine: "Unreal Engine 5",
      demoLink: "https://drive.google.com/drive/folders/1yMY4rvwPvMCh80a5gwHHhOqS8AljXR8g?usp=sharing",
      fullDescription: "Temple Escape is a festive game where up to 4 players compete in an Indiana Jones-inspired temple escape challenge. Personalize your character with a Avoid treacherous traps, solve quick puzzles, and compete against your friends in this mini-game.",
      features: [
        "Up to 4 player local multiplayer",
        "Dynamic trap and hazard system",
        "Random chunks generation",
        "Indiana Jones-themed environment",
        "Fully customizable character"
      ],
      role: "Game Developer",
      teamSize: "7",
      duration: "4 days",
      screenshots: [IndianaThumb2, IndianaThumb3],
      videos: [IndianaVideo],
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
      demoLink: "https://drive.google.com/drive/folders/15Y1-_Ygq2DorKxQ3ELl2tHvBq2vbzw_7?usp=sharing",
      fullDescription: "Biogen presents an advanced UI/UX design in Unreal Engine 5, featuring a HUD system and an interactive skill tree. This project demonstrates the creation of complex user interfaces using UMG (Unreal Motion Graphics) and Widget Blueprints.",
      features: [
        "Advanced HUD with real-time updates",
        "Interactive skill tree system",
        "Dynamic widget animations",
        "Custom UI components",
        "Data-driven progression system",
      ],
      role: "UI/UX Developer & Designer",
      teamSize: "3",
      duration: "2 months",
      screenshots: [BiogenThumb2, BiogenThumb3, BiogenThumb4],
    },
  ];

  // Godot projects removed per request

  const gameJamGames: GameCardProps[] = [
    {
      title: "Bubble Pop",
      description:
        "Created in 48 hours for the 2025 Global Game Jam. A horror game set in a bubble wrap factory. Your goal is to escape without getting caught by the monster. Be careful not to step on the bubble wrap!",
      image: BubblePopThumb,
      fullDescription: "Bubble Pop is a horror game created during Global Game Jam 2025, a 48-hour event. In a bubble wrap factory, the player must navigate their way through dark corridors while avoiding a terrifying monster. Every step must be carefully planned, as walking on bubble wrap will alert the monster to your presence.",
      features: [
        "Stealth-based horror gameplay",
        "Audio-reactive AI enemy",
        "Environmental hazard mechanics",
        "Atmospheric factory setting",
        "Tension-building sound design",
      ],
      role: "Game Designer & Programmer",
      teamSize: "7",
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
      fullDescription: "T-Life is a game about Gilbert, our friend T-Rex, who is trying to integrate into his new life among humans. Our goal is to help him accomplish everyday tasks that are difficult for him due to his small arms. Find the objects and think about possible combinations to help Gilbert!",
      features: [
        "Multiple everyday task challenges",
        "Humorous T-Rex character design",
        "Creative problem-solving gameplay",
      ],
      role: "Developer",
      teamSize: "4",
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
                    transition={{ duration: 0.3 }}
                >
                  <motion.h1
                    className="hero-name text-5xl md:text-6xl lg:text-7xl mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      opacity: { duration: 0.5, ease: "easeOut" },
                      y: { duration: 0.5, ease: "easeOut" },
                    }}
                    style={{ textShadow: 'none' }}
                  >
                    {"Loïck Konieczny".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.03,
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
                      duration: 0.36,
                      delay: 0.48,
                      ease: "easeOut"
                    }}
                    className="text-xl md:text-2xl text-primary"
                  >
                    <motion.span
                      animate={{
                        opacity: [0.9, 1, 0.9],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse",
                        delay: 0.9
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
                    duration: 0.48,
                    delay: 0.72,
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
                    duration: 0.48,
                    delay: 0.9,
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
              transition={{ duration: 0.36, ease: "easeOut" }}
            >
              <div className="space-y-8">
                <motion.div
                  className="text-center space-y-2 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.36 }}
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
                    transition={{ duration: 0.36, ease: "easeOut" }}
                  >
                    <TabsList className="flex flex-col sm:flex-row w-full max-w-3xl gap-2 p-1.5 justify-center">
                      <TabsTrigger
                        className="w-full sm:w-auto"
                        value="all"
                        onClick={() => setShowAllGames(true)}
                      >
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="w-4 h-4" />
                          <span>All Games</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        className="w-full sm:w-auto"
                        value="unity"
                        onClick={() => setShowAllGames(false)}
                      >
                        <div className="flex items-center gap-2">
                          <UnityIcon className="w-4 h-4" />
                          <span>Unity</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        className="w-full sm:w-auto"
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
                  transition={{ duration: 0.36 }}
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
                  transition={{ duration: 0.36 }}
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
                transition={{ duration: 0.36 }}
              >
                <h2 className="text-center">About Me</h2>
                <div className="space-y-4 text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.36, delay: 0.06 }}
                  >
                    I am a passionate game developer, working with several game engines and programming languages. I love learning new things and optimizing my code and games. 
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.36, delay: 0.12 }}
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