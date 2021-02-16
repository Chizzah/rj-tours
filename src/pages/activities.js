/* eslint-disable */
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import FadeIntoView from "../components/Animations/FadeIntoView";

import Layout from "../components/layout";

const ActivitiesPage = () => {
  return (
    <Layout>
      {/* HERO */}

      <section className="flex flex-col items-center justify-center w-full text-gray-200 activities-bg">
        <h1 className="text-lg font-light text-center uppercase lg:text-2xl">
          Activities
        </h1>
        <p className="text-2xl font-bold text-center capitalize lg:text-5xl">
          Meet our <br /> amazing community
        </p>
      </section>

      {/* CONTENT */}

      <section className="py-24 xl:py-48">
        {/* NOMONDE CRECHE */}

        <FadeIntoView>
          <div className="flex flex-col items-center justify-center text-gray-100 bg-green-500 lg:py-0 lg:flex-row">
            <div className="w-full lg:w-4/6">
              <StaticImage
                layout="fullWidth"
                placeholder="blurred"
                className="object-cover"
                src="../images/creche-activities.jpg"
                alt="Nomonde Creche"
              />
            </div>
            <div className="w-full lg:w-2/6">
              <div className="w-full mb-8 text-center lg:text-left lg:w-12/12 lg:mx-auto xl:w-9/12">
                <h2 className="my-12 font-semibold uppercase lg:my-4 lg:mx-4 xl:text-3xl">
                  Nomonde Creche
                </h2>
                <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  NOMONDE the school consists of 56 learners, 3 teachers, 1
                  chef, 3 classrooms,2 toilets and a storeroom. The creche
                  offers EARLY CHILDHOOD DEVELOPMENT PROGRAMS that helps the
                  grow of these minors., even though they’ve got a lack of toys
                  for a play room, a play area, balls for any games that they
                  want the kids go take part in, hoola's or a playground that
                  they can play on.
                </p>
                <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  These lacks have an impact on many of our kids and parents
                  that really want to send their kids to school. Security is
                  also a huge problem and it hinders growth within our
                  community.
                </p>
                <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  There is still a lot to be done to the structure and safety
                  concerning the crèche. Safety policies need to be put in place
                  in order for the crèche to function fully. This does not
                  prohibit them from learning a third language like ISIXHOSA.
                </p>
              </div>
            </div>
          </div>
        </FadeIntoView>

        {/* RASSOUW RECYCLING */}

        <FadeIntoView>
          <div className="flex flex-col items-center justify-center lg:py-0 lg:flex-row">
            <div className="w-full lg:order-2 lg:w-4/6">
              <StaticImage
                layout="fullWidth"
                placeholder="blurred"
                className="object-cover"
                src="../images/recycle-activities.jpg"
                alt="Rassouw Recycling"
              />
            </div>
            <div className="w-full lg:order-1 lg:w-2/6">
              <div className="w-full mb-8 text-center lg:text-left lg:w-12/12 lg:mx-auto xl:w-9/12">
                <h2 className="my-12 font-semibold uppercase lg:my-4 lg:mx-4 xl:text-3xl">
                  RASSOUW RECYCLING
                </h2>
                <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  The love for recycling started in the year 1986 for Rendal
                  Rassouw, where he worked at the Andries office in Eldorado
                  Park, Johannesburg. He started a small business with an
                  unemployed worker and it is still in existence called CHÈ CHÈ
                  RECYCLING. He has a saying that says: “RECYCLING IS NOT ONLY
                  MY PASSION….BUT ALSO MY HOBBY THAT I LIVE BY”. After doing a
                  lot of research Randall in 1994, realised that 80% of
                  RECYCLING material go to waste on dumping sites.
                </p>
                {/* <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  Rendal Rassouw then started his RECYCLING BUSINESS IN 2015 to
                  make a positive contribution to the community as a whole. 1 Of
                  the businesses mission and vision for the community, schools
                  and churches is to see the importance of RECYCLING and the
                  positive contribution it makes to our immediate community.
                </p> */}
                <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  On this venture the guests will explore the importance of
                  recycling, why Rendal do what he loves every day. He will take
                  you through the whole process of this and he currently only
                  recycles 2% of Oudtshoorn’s waste and this is an under
                  achievement for him that is why HE WORKS EVERYDAY TO BETTER
                  HIS PASSION TO TURN IT INTO 1 OF THE GREATEST RECYCLING
                  PROJECTS IN THE WHOLE OF OUDTSHOORN.
                </p>
              </div>
            </div>
          </div>
        </FadeIntoView>

        {/* AURIAL COLLEGE */}

        <FadeIntoView>
          <div className="flex flex-col items-center justify-center bg-gray-300 lg:py-0 lg:flex-row">
            <div className="w-full lg:w-4/6">
              <StaticImage
                layout="fullWidth"
                placeholder="blurred"
                className="object-cover"
                src="../images/aurial-activities.jpg"
                alt="Aurial College"
              />
            </div>
            <div className="w-full lg:w-2/6">
              <div className="w-full mb-8 text-center lg:text-left lg:w-12/12 lg:mx-auto xl:w-9/12">
                <h2 className="my-12 font-semibold uppercase lg:my-4 lg:mx-4 xl:text-3xl">
                  Aurial College
                </h2>
                <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  Aurial college BELIEFS in grooming our future leaders, by
                  making sure everyone feels safe. Bullying of any kind isn't
                  allowed, and degrading comment about things like race,
                  religion, culture, sexual orientation, will not be tolerated.
                </p>
                <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  The school has a broad history not only in EDUCATION but is 1
                  of the schools that actually have the German language as a
                  subject.
                </p>
                <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  Previously the school was known for its exchange students,
                  whereby 3 of the best learners together with mr C Swiegelaar
                  would go to DEUTCHLAND and see how they do things there when
                  it comes to their way of living and also their way of
                  studying.
                </p>
                <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  So with this said the tourist will get a chance to meet
                  student and interact with them on an educational level where
                  they will be able to see how diligent and hardworking these
                  kids are.
                </p>
                {/* <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  Oudtshoorn is a place where a lot of Tourisms opportunities
                  are present especially for those students that learn this
                  language as a subject. Showcasing that THE OPPORTUNITIES ARE
                  THEIR…YOU JUST HAVE TO WORK HARD AND EARN HOUR PLACE IN THIS
                  WORLD!
                </p> */}
              </div>
            </div>
          </div>
        </FadeIntoView>

        {/* SUIKERBUILT ONVERWACHT */}

        <FadeIntoView>
          <div className="flex flex-col items-center justify-center text-gray-100 bg-blue-400 lg:py-0 lg:flex-row">
            <div className="w-full lg:order-2 lg:w-4/6">
              <StaticImage
                layout="fullWidth"
                placeholder="blurred"
                className="object-cover"
                src="../images/suikerbuilt-activities.jpg"
                alt="Suikerbuilt Onverwacht"
              />
            </div>
            <div className="w-full lg:order-1 lg:w-2/6">
              <div className="w-full mb-8 text-center lg:text-left lg:w-12/12 lg:mx-auto xl:w-9/12">
                <h2 className="my-12 font-semibold uppercase lg:my-4 lg:mx-4 xl:text-3xl">
                  Suikerbuilt-Onverwacht
                </h2>
                <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  In 1968 all residents of Suikerbult (Onverwacht) were forcibly
                  removed to a newly developed township called Bridgeton,
                  situated across the road from Suikerbult. By the time the
                  forced removal took place,very few if any were employed full
                  time.
                </p>
                <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  Municipal health officials advised them they would have to
                  move because the soil on which they lived was sour or
                  perhaps(brak of suur) and extremely unhealthy. They were also
                  told that if they moved it would be temporary arrangement. A
                  contractor was paid R420 to flatten the premises and remove
                  the rubble..
                </p>
                <p className="mx-8 my-4 text-xs lg:mx-4 lg:my-2 xl:text-base">
                  There were +-14 households on the west living settlement and
                  +-50 on the eastern. Out of all the people that were living on
                  Suikerbult (Onverwacht) forty three households were not
                  accommodated into the municipal residential scheme and “had to
                  make their own way" and core group of Suikerbult residents
                  stated very simply” Our parents and grandparent have always
                  lived here".
                </p>
              </div>
            </div>
          </div>
        </FadeIntoView>
      </section>
    </Layout>
  );
};

export default ActivitiesPage;
