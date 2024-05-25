import Nav from "@/components/layout/Nav/Nav";
import Image from "next/image";
import { Abril_Fatface } from "next/font/google";
import aboutImg1 from "@/public/morenikeji-about-1.jpg";
import aboutImg2 from "@/public/morenikeji-about-3.jpg";
import landingImg from "@/public/morenikeji-about-3.jpg";
import vine1 from "@/public/english-ivy.svg";
import ExperienceCard from "@/components/ui/ExperienceCard/ExperienceCard";
import Footer from "@/components/layout/Footer/Footer";

const fatface = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });


const exp = [


  {
    id: 1,
    title: "COO",
    company: "Wintar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et vehicula leo, vitae",
  },
  {
    id: 2,
    title: "COO",
    company: "Wintar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et vehicula leo, vitae",
  },
  {
    id: 3,
    title: "COO",
    company: "Wintar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et vehicula leo, vitae",
  },

]


export default function Home() {
  return (
    <main className="">
      <div className="h-[80vh] px-9">
        <div className="h-2/3 relative">
          <div className="absolute -z-[100] "><Image className="w-[100%]"  src={landingImg} /></div>
          <div className="text-9xl h-full justify-center flex flex-col items-end ">
            <div> Morenikeji</div>
            <div>Adebola </div>
            <Image className="w-[100px]" src={vine1} />
          </div>
          
          </div>
        <div className="h-1/3 flex">
          <div className="flex flex-col justify-end"> 
            <div className=" font-semibold text-2xl pr-3">
              As a multidisciplinary artist, I elevate storytelling to new
              heights by seamlessly merging diverse mediums such as writing,
              filmmaking, fashion design, and poetry to create a rich and
              immersive tapestry of artistic expression.
            </div>
            <div className="mt-3 text-xl">myemail@gmal.com</div>
          </div>

          <div className="text-xl w-1/3 justify-end flex flex-col text-right">
            <div>Film</div>
            <div>Fashion</div>
            <div>Strategy</div>
            <div>Consulting</div>
          </div>
        </div>
      </div>

      <section id="about" className="px-9 pt-32">
  <h1 className="px-9 text-8xl mb-20">About <br/> Me</h1>

        <div className="font-semibold text-2xl text-center mb-10">
          For the last 3 years, I've been Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam illo adipisci quisquam sint quasi labore
          illum minima, excepturi magnam architecto!
        </div>

        <div className="font-semibold text-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          odit distinctio sed alias recusandae ducimus nulla architecto, error
          consequuntur dignissimos ea aperiam minima placeat adipisci, possimus
          incidunt iste natus iure..
        </div>

        <div className="w-full flex justify-center items-center mt-32">
          <div className="w-[350px] relative ">
            <Image src={aboutImg1} />

            {/* <Image className="absolute -right-[100px] -bottom-[300px]" src={aboutImg2} /> */}
          </div>
        </div>
      </section>


      <section id="experience" className="mt-20">
  <h1 className="px-9 text-8xl">Work <br/> Experience</h1>

  {
    exp.map((x) => (

      <ExperienceCard id={x.id} company={x.company} title={x.title} desc={x.desc}/>


    ))
  }

      </section>


<section>


<section id="works" className="mt-20">
<h1 className="px-9 text-8xl">Notable<br/> Works</h1>

</section>


</section>
      <Footer/>
    </main>
  );
}
