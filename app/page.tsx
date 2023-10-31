import TeacherMsg from "@/components/TeacherMsg";
import Slider from "../components/Slider";
import BestStudents from "../components/BestStudents";

export default function Home() {
  return (
    <div>
      <Slider />
      <div>
        <BestStudents />
      </div>

      <div className="md:max-w-screen-lg max-w-sm mx-auto flex justify-center">
        <TeacherMsg />
      </div>
      <div className="md:max-w-screen-lg max-w-sm bg-green-400 h-64 mx-auto">
        <h1>
          this is Rotary media containerthis is Rotary media containethis is
          Rotary media containethis is Rotary media containethis is Rotary media
          containethis is Rotary media containe
        </h1>
      </div>
    </div>
  );
}
