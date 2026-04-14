


import DashboardCard from '../Components/DashboardCard/DashboardCard';
import HeroSection from '../Components/HeroSection/HeroSection';
import { Context } from '../ContextAPI/Context';

const HomePage = () => {


    return (
        <div>
            <section>
                <HeroSection />
            </section>
            <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8 mt-5 border-b border-gray-300 pb-10'>
                <DashboardCard number={5} title={'Total Friends'} />
                <DashboardCard number={3} title={'On Track'} />
                <DashboardCard number={6} title={'Need Attention'} />
                <DashboardCard number={12} title={'Interactions This Month'} />
            </section>
        </div>
    );
};

export default HomePage;