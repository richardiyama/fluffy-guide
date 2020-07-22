import React from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import ConsultingAdvisory from '../elements/contact/ConsultingAdvisory';

const ConsultingAdvisoryScheduleForm = () => {
    return (
        <>
            <PageHelmet pageTitle='Schedule for Learning & Development Services' />

             {/* Start Header Area  */}
             <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
                {/* End Header Area  */}

            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Schedule your consultation for Learning & Development Services'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Contact Form  */}
                <div className="rn-contact-form-area ptb--120 bg_color--1">
                    <ConsultingAdvisory contactImages="/assets/images/about/about-10.jpg" />
                </div>
                {/* Start Contact Form  */}

            </main>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            <Footer />
            {/* End Footer Area  */}

        </>
        
    )
}

export default ConsultingAdvisoryScheduleForm;