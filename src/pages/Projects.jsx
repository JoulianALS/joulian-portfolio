import React, { useState } from "react";
import Slider from "react-slick";
import BackgroundScene from "../three/BackgroundScene";

const sections = [
  // Apps
  {
    title: "Apps",
    images: [
      {
        src: "./joulian-portfolio/LoRaChat.png",
        title: "LoRaChat",
        description: "Eine App für verschlüsselte Nachrichten über LoRa-Netzwerke.",
        technologies: "LoRa, C, C#, WPF",
      },
      {
        src: "./joulian-portfolio/Notflix.png",
        title: "Notflix",
        description: "Eine Web-App, die Netflix nachahmt.",
        technologies: "Blazor, Bootstrap, C#",
      },
      {
        src: "./joulian-portfolio/Essistent.png",
        title: "Essistent",
        description: "Eine App, die Rezepte basierend auf Zutaten vorschlägt.",
        technologies: "Python, TKinter",
      },
      {
        src: "./joulian-portfolio/EasyChat.png",
        title: "EasyChat",
        description: "Ein Chatprogramm für mehrere Nutzer über einen Server.",
        technologies: "WPF, C#, TCP",
      },
      {
        src: "./joulian-portfolio/ToDo.png",
        title: "To-Do",
        description: "Eine einfache To-Do-Liste.",
        technologies: "WPF, C#",
      },
      {
        src: "./joulian-portfolio/SimpleEditor.png",
        title: "SimpleEditor",
        description: "Ein einfacher Texteditor.",
        technologies: "WPF, C#",
      },
      {
        src: "./joulian-portfolio/LottoSimulation.png",
        title: "LottoSimulation",
        description: "Simuliere eine Lotterie.",
        technologies: "WPF, C#",
      },
      {
        src: "./joulian-portfolio/FootballSimulator.png",
        title: "FootballSimulator",
        description: "Simuliere eine Fußballliga.",
        technologies: "WPF, C#",
      },
    ],
  },

  // Games
  {
    title: "Spiele",
    images: [
      {
        src: "./joulian-portfolio/OutOfLight.png",
        title: "OutOfLight",
        description: "Ein kurzes First-Person Horrorspiel in Unity.",
        technologies: "Unity, C#",
      },
      {
        src: "./joulian-portfolio/Breakout.png",
        title: "Breakout",
        description: "Ein physikbasiertes Breakout-Spiel.",
        technologies: "Unity, C#",
      },
      {
        src: "./joulian-portfolio/Platformer.png",
        title: "2D-Platformer",
        description: "Ein einfacher 2D-Platformer.",
        technologies: "Unity, C#",
      },
      {
        src: "./joulian-portfolio/UNO.png",
        title: "UNO",
        description: "Ein UNO-Spiel mit Musikplayer.",
        technologies: "WPF, C#",
      },
      {
        src: "./joulian-portfolio/RedLightGreenLight.png",
        title: "RotGrün",
        description: "Ein Spiel, bei dem du dich bei Grün bewegst und bei Rot stoppst. (Squid Game)",
        technologies: "WPF, C#",
      },
      {
        src: "./joulian-portfolio/Snake.png",
        title: "Snake",
        description: "Ein klassisches Snake-Spiel.",
        technologies: "WPF, C#",
      },
      {
        src: "./joulian-portfolio/TicTacToe.png",
        title: "TicTacToe",
        description: "Ein einfaches Tic-Tac-Toe-Spiel.",
        technologies: "WPF, C#",
      },
      {
        src: "./joulian-portfolio/Yahtzee.png",
        title: "Yahtzee",
        description: "Ein Würfelspiel.",
        technologies: "WPF, C#",
      },
    ],
  },

  // Websites
  {
    title: "Webseiten",
    images: [
      {
        src: "./joulian-portfolio/DreamStudio.png",
        title: "DreamStudio",
        description: "Eine Website für Fotografen.",
        technologies: "HTML, CSS, JavaScript",
      },
      {
        src: "./joulian-portfolio/ArtGallery.png",
        title: "ArtGallery",
        description: "Eine Website, um Kunstwerke zu zeigen.",
        technologies: "HTML, CSS",
      },
      {
        src: "./joulian-portfolio/Pong.png",
        title: "Pong",
        description: "Ein klassisches Pong-Spiel.",
        technologies: "HTML, CSS, JavaScript",
      },
      {
        src: "./joulian-portfolio/AvatarCreator.png",
        title: "AvatarCreator",
        description: "Erstelle einen Avatar mit verschiedenen Optionen.",
        technologies: "HTML, CSS, JavaScript",
      },
      {
        src: "./joulian-portfolio/Recipe.png",
        title: "Rezept",
        description: "Eine einfache Rezeptseite.",
        technologies: "HTML, CSS",
      },
      {
        src: "./joulian-portfolio/Hangman.png",
        title: "Hangman",
        description: "Ein Hangman-Spiel.",
        technologies: "HTML, CSS, JavaScript",
      },
      {
        src: "./joulian-portfolio/CarAnimation.png",
        title: "CarAnimation",
        description: "Eine Animation eines fahrenden Autos.",
        technologies: "HTML, CSS",
      },
    ],
  },

  // // Art
  // {
  //   title: "Art",
  //   images: [
  //     {
  //       src: "./joulian-portfolio/Diorama.png",
  //       title: "Wild West Diorama",
  //       description: "Ein detailliertes 3D-Diorama, das eine Westernstadt mit realistischen Elementen darstellt.",
  //       technologies: "Blender",
  //     },
  //     {
  //       src: "./joulian-portfolio/DoseWerbung.mp4",
  //       title: "DoseWerbung",
  //       description: "Eine kreative Werbeanimation für eine fiktive Getränkedose.",
  //       technologies: "Blender, Premiere Pro",
  //     },
  //     {
  //       src: "./joulian-portfolio/BallAnimation.mp4",
  //       title: "BallAnimation",
  //       description: "Eine Sammlung von Animationen, die verschiedene physikalische Eigenschaften von Bällen zeigen.",
  //       technologies: "After Effects",
  //     },
  //     {
  //       src: "./joulian-portfolio/AutoAnimation.mp4",
  //       title: "AutoAnimation",
  //       description: "Eine physikbasierte Animation eines Autos, das beschleunigt und abbremst.",
  //       technologies: "After Effects",
  //     },
  //     {
  //       src: "./joulian-portfolio/RaketenAnimation.mp4",
  //       title: "RaketenAnimation",
  //       description: "Eine Animation, die den Start einer Rakete in den Weltraum zeigt.",
  //       technologies: "After Effects",
  //     }, 
  //   ],
  // },
];

function Projects() {
  return (
    <div className="projects-container">

      {/* Background */}
      <BackgroundScene/>

      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <Section title={section.title} images={section.images}/>
          {index < sections.length - 1 && <hr style={{ margin: "50px 0", border: "1px solid #7f5af0" }}/>}
        </React.Fragment>
      ))}
    </div>
  );
}

function Section({ title, images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const settings = {
    dots: true, // bullet points under the slider
    infinite: true, // infinite loop
    speed: 500, // transition
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentImage(images[current]),
    arrows: true,
    cssEase: "ease-in-out",
  };

  return (
    <div style={{ marginBottom: "300px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "100px" }}>{title}</h1>
      <div className="section-container">
        {/* Beschreibung */}
        <div className="section-description">
          <h2>{currentImage.title}</h2>
          <p>{currentImage.description}</p>
          <p>
            <strong>Technologien:</strong> <span className="technologies-text">{currentImage.technologies}</span>
          </p>
        </div>

        {/* Slider */}
        <div className="slider-container">
        <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} style={{ position: "relative" }}>
                {/* Check if the file is an MP4 */}
                {image.src.endsWith(".mp4") ? (
                  <video
                    src={image.src}
                    controls
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                ) : (
                  <img
                    src={image.src}
                    alt={`Slide ${index}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Projects;
