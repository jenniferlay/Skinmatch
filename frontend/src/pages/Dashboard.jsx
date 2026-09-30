import DashHomeComp from "../components/dashboardHome";
import FooterComp from "../components/FooterComp";
import HeaderComponent from "../components/header";

export default function DashboardPage(){
    
    return(
        <>
            <HeaderComponent />
            <DashHomeComp />
            <FooterComp />
        </>
    )
}