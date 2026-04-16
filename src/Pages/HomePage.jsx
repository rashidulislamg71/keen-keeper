
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import Friends from '../Components/Friends/Friends';
import HeroSection from '../Components/HeroSection/HeroSection';

const HomePage = () => {
    return (
        <div>
            <section>
                <HeroSection />
            </section>

            {/* dashboard cards  */}
            <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
             gap-2 md:gap-6 px-2 lg:px-20 md:px-16 mt-5 border-b border-gray-300 pb-10'>
                <DashboardCard number={5} title={'Total Friends'} />
                <DashboardCard number={3} title={'On Track'} />
                <DashboardCard number={6} title={'Need Attention'} />
                <DashboardCard number={12} title={'Interactions This Month'} />
            </section>

            {/* friends list  */}
            <section>
                <Friends />
            </section>
        </div>
    );
};

export default HomePage;