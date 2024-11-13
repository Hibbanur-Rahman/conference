import adminBuilding from "../assets/images/admin-building.jpg";
import csIt from "../assets/images/cs-and-it-dept.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-12 bg-gray-50 py-8">
      {/* About ICICC-2024 Section */}
      <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row items-center justify-between mb-10">
        <div className="lg:w-6/12 w-full mb-6 lg:mb-0">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            About ICCMDN-2024
          </h2>
          <p className="text-xl font-medium text-gray-700">
            We are extremely pleased to welcome you to ICCMDN-2024.
          </p>
        </div>
        <div className="lg:w-6/12 w-full">
          <p className="text-lg text-justify text-gray-600 leading-relaxed">
            The objective of this Scopus indexed 7th International Conference on
            Intelligent Computing and Communication (ICCMDN – 2024) is to present
            a unified platform for advanced and multi-disciplinary research
            towards the design of smart computing, information systems, and
            electronic systems. The theme focuses on various innovation
            paradigms in system knowledge, intelligence, and sustainability that
            may be applied to provide realistic solutions to variegated problems
            in society, environment, and industries. The scope is also extended
            towards the deployment of emerging computational and knowledge
            transfer approaches, optimizing solutions in a variety of
            disciplines. The conference proceedings aim to publish unpublished
            work related to the topics mentioned below. The conference is
            scheduled to be held in August 2024 at CMR Technical Campus,
            Hyderabad, Telangana, India.
          </p>
        </div>
      </div>

      {/* MANUU Section */}
      <div className="w-11/12 lg:w-10/12 bg-white rounded-lg shadow-lg p-6 mb-10">
        <h1 className="text-3xl text-center font-semibold text-blue-800 mb-4">
          Maulana Azad National Urdu University
        </h1>
        <h3 className="text-xl text-center font-medium text-blue-600 mb-2">
          (A Central University, Hyderabad, India)
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Maulana Azad National Urdu University (MANUU) is a central university
          established by an Act of the Indian Parliament in the year 1998, with
          all India Jurisdiction, to promote and impart research, vocational and
          technical education through regular and distance modes. It is situated
          in the IT hub of the ever-active city of Hyderabad. The University has
          7 Schools of Studies, 19 departments, and 8 Colleges of Teacher
          Education. It also has five polytechnics, two satellite campuses, and
          14 centres and directorates for education and research. By
          acknowledging the efforts of the university in research and education,
          the National Assessment and Accreditation Council (NAAC) has awarded
          an <b>‘A+’</b> grade to the University.
        </p>
      </div>

      {/* Image Slider Section */}
      <div className="w-11/12 lg:w-10/12 bg-white rounded-lg shadow-lg p-6 mb-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            className: "swiper-pagination-top-spacing",
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={adminBuilding}
              alt="Admin Building"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={csIt}
              alt="CS & IT Department"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* CS & IT Department Section */}
      <div className="w-11/12 lg:w-10/12 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-purple-800 mb-4">
          Department of Computer Science & Information Technology
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          The Department of Computer Science & Information Technology (CS&IT)
          under the ‘School of Technology’ was established in 2006. The
          department has state-of-the-art ICT infrastructure. At present, the
          department offers B.Tech, M.Tech, MCA, and PhD programmes in Computer
          Science and Information Technology. All these programs are approved by
          the All India Council for Technical Education (AICTE). Currently,
          there are 25 faculty members conducting teaching and research in
          various areas of CS/IT. The Department of CS&IT focuses on research in
          various cutting-edge areas such as machine translation, adaptive
          systems, personalized learning, bio-informatics, road dynamics,
          computer vision, web semantics, disease prediction, smart computing,
          networking, security, etc.
        </p>
      </div>
    </div>
  );
};

export default Home;
