import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { HashLoader } from 'react-spinners';

function Root() {
    const navigation = useNavigation();

    return (
        <div>
            <NavBar />

            <main className="flex-wrap">
                {navigation.state === "loading" ? (
                    <div className="flex justify-center items-center h-[90vh] ">
                        <HashLoader
                            color="rgb(20, 102, 73)"
                            size={30}
                        />
                    </div>
                ) : (
                    <Outlet />
                )}
            </main>

            <Footer />
        </div>
    )
}

export default Root