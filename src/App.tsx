import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { ReceiveScreen } from './components/ReceiveScreen';
import { SendScreen } from './components/SendScreen';
import { SwapScreen } from './components/SwapScreen';
import { StatementScreen } from './components/StatementScreen';

type Screen = 'login' | 'dashboard' | 'profile' | 'receive' | 'send' | 'swap' | 'statement';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [statementFilter, setStatementFilter] = useState<'all' | 'btc' | 'lightning'>('all');

  const handleLogin = () => {
    setCurrentScreen('dashboard');
  };

  const handleProfileClick = () => {
    setCurrentScreen('profile');
  };

  const handleReceiveClick = () => {
    setCurrentScreen('receive');
  };

  const handleSendClick = () => {
    setCurrentScreen('send');
  };

  const handleSwapClick = () => {
    setCurrentScreen('swap');
  };

  const handleBtcCardClick = () => {
    setStatementFilter('btc');
    setCurrentScreen('statement');
  };

  const handleLightningCardClick = () => {
    setStatementFilter('lightning');
    setCurrentScreen('statement');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setCurrentScreen('login');
  };

  switch (currentScreen) {
    case 'login':
      return <LoginScreen onLogin={handleLogin} />;
    case 'dashboard':
      return (
        <DashboardScreen 
          onProfileClick={handleProfileClick}
          onReceiveClick={handleReceiveClick}
          onSendClick={handleSendClick}
          onSwapClick={handleSwapClick}
          onBtcCardClick={handleBtcCardClick}
          onLightningCardClick={handleLightningCardClick}
        />
      );
    case 'profile':
      return <ProfileScreen onBack={handleBackToDashboard} onLogout={handleLogout} />;
    case 'receive':
      return <ReceiveScreen onBack={handleBackToDashboard} />;
    case 'send':
      return <SendScreen onBack={handleBackToDashboard} />;
    case 'swap':
      return <SwapScreen onBack={handleBackToDashboard} />;
    case 'statement':
      return <StatementScreen onBack={handleBackToDashboard} initialFilter={statementFilter} />;
    default:
      return <LoginScreen onLogin={handleLogin} />;
  }
}