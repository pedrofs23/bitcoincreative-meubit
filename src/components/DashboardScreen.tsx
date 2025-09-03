import { ArrowDownLeft, ArrowUpRight, RefreshCw, User, Zap } from "lucide-react";
import { Button } from "./ui/button";

interface DashboardScreenProps {
  onProfileClick: () => void;
  onReceiveClick: () => void;
  onSendClick: () => void;
  onSwapClick: () => void;
  onBtcCardClick: () => void;
  onLightningCardClick: () => void;
}

export function DashboardScreen({ onProfileClick, onReceiveClick, onSendClick, onSwapClick, onBtcCardClick, onLightningCardClick }: DashboardScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onProfileClick}
          className="w-10 h-10 bg-orange-400 hover:bg-orange-500 text-white rounded-full"
        >
          <User className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold">MEUBIT</h1>
        <div className="w-10" /> {/* Spacer for center alignment */}
      </div>

      <div className="px-6 py-8">
        {/* Balance Section */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm mb-2">SALDO TOTAL</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">R$ 62.020,00</h2>
          
          {/* Action Buttons */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="text-center">
              <Button 
                size="icon" 
                onClick={onReceiveClick}
                className="w-14 h-14 bg-orange-400 hover:bg-orange-500 rounded-full mb-2"
              >
                <ArrowDownLeft className="w-6 h-6" />
              </Button>
              <p className="text-sm text-gray-600">Receber</p>
            </div>
            
            <div className="text-center">
              <Button 
                size="icon" 
                onClick={onSendClick}
                className="w-14 h-14 bg-orange-400 hover:bg-orange-500 rounded-full mb-2"
              >
                <ArrowUpRight className="w-6 h-6" />
              </Button>
              <p className="text-sm text-gray-600">Enviar</p>
            </div>
            
            <div className="text-center">
              <Button 
                size="icon" 
                onClick={onSwapClick}
                className="w-14 h-14 bg-orange-400 hover:bg-orange-500 rounded-full mb-2"
              >
                <RefreshCw className="w-6 h-6" />
              </Button>
              <p className="text-sm text-gray-600">Trocar</p>
            </div>
          </div>
        </div>

        {/* Bitcoin Balance Card */}
        <button 
          onClick={onBtcCardClick}
          className="w-full bg-white rounded-2xl p-4 mb-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-orange-500 font-bold text-lg">₿</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Bitcoin</h3>
                <p className="text-sm text-gray-600">Layer 1 • Rede principal</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">₿ 0.22000000</p>
              <p className="text-sm text-gray-600">R$ 61.600,00</p>
            </div>
          </div>
        </button>

        {/* Lightning Network Card */}
        <button 
          onClick={onLightningCardClick}
          className="w-full bg-orange-400 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Lightning Network</h3>
                <p className="text-sm opacity-90">Pagamentos instantâneos</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">150.000 sats</p>
              <p className="text-sm opacity-90">R$ 420,00</p>
            </div>
          </div>
        </button>

        {/* Extract Link */}
        <div className="text-center mt-8">
          <button className="text-gray-500 text-sm">
            Toque nos cartões para ver o extrato
          </button>
        </div>
      </div>
    </div>
  );
}