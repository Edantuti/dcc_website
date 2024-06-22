import {Heading} from "@/components/Heading";
import {TeamCard} from "@/components/TeamCard";
import {TeamSection} from "@/components/TeamSection";
import teamData from "@/public/team-roles.json";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:'Teams - Developers & Coders Club'
}


export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="text-white space-y-10">
        <Heading>Meet The Team</Heading>
        <section className="mx-20">
        <article>
          <h3 className="text-center text-2xl py-5">Executive Team</h3>
          <div className="flex items-center flex-wrap justify-center xl:gap-20 gap-5">
            {Object.keys(teamData).map((role: string) => {
              if (
                role == "president" ||
                role == "vice president" ||
                role == "general secretary" ||
                role == "event head" ||
                role == "treasurer"
              ) {
                return teamData[role].map(
                  (data: {
                    name: string;
                    profile_pic: string;
                    linkedin: string;
                    github: string;
                    tags: string;
                  }) => (
                    <TeamCard
                      key={data.name}
                      name={data.name}
                      profile_url={data.profile_pic}
                      linkedin={data.linkedin}
                      github={data.github}
                      designation={data.tags}
                    />
                  )
                );
              }
            })}
          </div>
        </article>
        <TeamSection data={teamData} team="web" title="Web Development Team" />
        
        <TeamSection data={teamData} team="android" title="Android Development Team" />
        <TeamSection data={teamData} team="cp" title="Competitive Programming Team"/>
        <TeamSection data={teamData} team="dsa" title="Data Structure and Algorithms Team" />
        <TeamSection data={teamData} team="ml" title="Machine Learning Team" />
        <TeamSection data={teamData} team="sm" title="Social Media & Outreach Team"/>
        <TeamSection data={teamData} team="gr" title="Graphics Team" />
        </section>
      </section>
    </main>
  );
};
