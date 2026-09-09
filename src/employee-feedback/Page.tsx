import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfileForm from "../components/ProfileForm";
import QuickFeedback from "../components/QuickFeedback";

const Page = () => {
    return (
        <div>
            <Header />
            {/* <ProfileForm/> */}
            <QuickFeedback/>
            <Footer />
        </div>
    )
}
export default Page;