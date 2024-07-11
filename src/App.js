import "./App.css";
import Avatar from "./components/Avatar";
import SkillList from "./components/SkillList";

function App() {
  const skills = [
    {
      title: "HTML + CSS",
      emoji: "💪",
      bgColor: "bg-[#9C27B0]",
      fontColor: "text-white",
    },
    {
      title: "Javascript",
      emoji: "🧠",
      bgColor: "bg-[#FFEB3B]",
      fontColor: "text-black",
    },
    {
      title: "React",
      emoji: "🤍",
      bgColor: "bg-[#F44336]",
      fontColor: "text-white",
    },
    {
      title: "ExpressJS",
      emoji: "👍",
      bgColor: "bg-[#43A047]",
      fontColor: "text-white",
    },
    {
      title: "Flutter",
      emoji: "🚀",
      bgColor: "bg-[#2196F3]",
      fontColor: "text-white",
    },
  ];
  return (
    <div className="App m-3  w-80 border-2 border-solid border-black">
      <Avatar />
      <SkillList skills={skills} />
    </div>
  );
}

export default App;
