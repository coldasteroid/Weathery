import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import { Sidebar } from './components/Sidebar';
import { CurrentWeather } from './components/CurrentWeather';
import { TodayHighlight } from './components/TodayHighlight';
import { WeatherMap } from './components/WeatherMap';
import { WeatherProvider } from './context/WeatherContext';
import { AirQualityDashboard } from './components/AirQualityDashboard';
import { Forecast } from './components/Forecast';
import { HealthRecommendations } from './components/aqi/HealthRecommendations';
import SignInPage from '@/components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
    throw new Error("Missing Publishable Key");
}

export default function App() {
    const [activeTab, setActiveTab] = useState('weather');

    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <WeatherProvider>
                <Router>
                    <Routes>
                        {/* Public Routes for Auth */}
                        <Route path="/sign-in/*" element={<SignInPage />} />
                        <Route path="/sign-up/*" element={<SignUpPage />} />

                        {/* Protected Dashboard Route */}
                        <Route
                            path="/"
                            element={
                                <>
                                    <SignedIn>
                                        <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
                                            <div className="max-w-[1400px] mx-auto">
                                                <div className="flex gap-6">
                                                    <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
                                                    <div className="flex-1 space-y-6">
                                                        {activeTab === 'weather' && (
                                                            <>
                                                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                                                    <CurrentWeather />
                                                                    <div className="lg:col-span-2">
                                                                        <TodayHighlight />
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-1 gap-6">
                                                                    <div className="w-full">
                                                                        <WeatherMap />
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                        {activeTab === 'air-quality' && <AirQualityDashboard />}
                                                    </div>
                                                    <div className="hidden lg:block w-[350px]">
                                                        <div className="bg-[#252525] rounded-3xl overflow-hidden h-full">
                                                            {activeTab === 'weather' && <Forecast />}
                                                            {activeTab === 'air-quality' && <HealthRecommendations />}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SignedIn>
                                    <SignedOut>
                                        <RedirectToSignIn />
                                    </SignedOut>
                                </>
                            }
                        />

                        {/* Redirect any unknown path to home */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Router>
            </WeatherProvider>
        </ClerkProvider>
    );
}
