
import Layout from "../layout";
import ProjectCard from "@/components/ProjectCard";

export default function Main() {
    return (
        <Layout>
            <div className="h-screen flex items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ml-[10%] mr-[10%]">
            <ProjectCard
                title="Excellence Study"
                description="An all-in-one online learning platform"
                thumbnail="https://i.ibb.co/kQDbv2G/excellence-study.png"
                link="https://github.com/visheshraghuvanshi/excellence-study"
            />
            <ProjectCard
                title="Chatify"
                description="A real-time chat application"
                thumbnail="https://i.ibb.co/cLFzj2b/chatify.png"
                link="https://github.com/visheshraghuvanshi/chatify"
            />
            <ProjectCard
                title="Doubt Solving Portal"
                description="A web application for student-faculty interaction"
                thumbnail="https://i.ibb.co/tLmT5Gv/dsp.png"
                link="https://github.com/visheshraghuvanshi/dsp"
            />
            </div>
        </Layout>
    );
}