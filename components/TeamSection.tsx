import TeamCard from "@/components/TeamCard";
export default ({data, team, title}:{data:any, team:string, title:string})=>{
    return (
        <article className={``}>
          <h3 className="text-center text-2xl py-5">{title}</h3>
          <div className={`flex items-center flex-wrap justify-center xl:gap-20 gap-5`}>
            {Object.keys(data).map((role: string) => {
              if (
                role === team
              ) {
                return data[role].map(
                  (data: {
                    name: string;
                    profile_pic: string;
                    linkedin: string;
                    github: string;
                    tags: string;
                  }) => (
                    <TeamCard
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
    )
}