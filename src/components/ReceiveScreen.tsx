import { useState } from 'react';
import { ArrowLeft, Copy, QrCode, Share } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ReceiveScreenProps {
  onBack: () => void;
}

export function ReceiveScreen({ onBack }: ReceiveScreenProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<'btc' | 'lightning'>('btc');
  const [amount, setAmount] = useState('');

  const btcAddress = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";
  const lightningInvoice = "lnbc1500nips0jyppqw...";

  const currentAddress = selectedCurrency === 'btc' ? btcAddress : lightningInvoice;
  const currentLabel = selectedCurrency === 'btc' ? "Endereço Bitcoin" : "Invoice Lightning";

  const handleCopy = () => {
    navigator.clipboard.writeText(currentAddress);
    // Toast notification could be added here
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        text: currentAddress
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onBack}
          className="mr-4"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold">Receber</h1>
      </div>

      <div className="px-6 py-8">
        {/* Currency Selection */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Selecionar Moeda</h2>
          
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedCurrency('btc')}
              className={`flex-1 p-4 rounded-xl border-2 transition-colors ${
                selectedCurrency === 'btc' 
                  ? 'border-orange-400 bg-orange-50' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="text-center">
                <p className="font-semibold text-gray-900">BTC</p>
                <p className="text-sm text-gray-600">Layer 1</p>
              </div>
            </button>

            <button
              onClick={() => setSelectedCurrency('lightning')}
              className={`flex-1 p-4 rounded-xl border-2 transition-colors ${
                selectedCurrency === 'lightning' 
                  ? 'border-orange-400 bg-orange-50' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="text-center">
                <p className="font-semibold text-gray-900">Lightning</p>
                <p className="text-sm text-gray-600">Instantâneo</p>
              </div>
            </button>
          </div>
        </div>

        {/* Amount Section */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Valor (Opcional)</h2>
          
          <Input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-center text-xl py-4 bg-gray-50 border-0 rounded-xl"
          />
        </div>

        {/* Address/Invoice Section */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{currentLabel}</h2>
          
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-800 break-all font-mono">
              {currentAddress}
            </p>
          </div>

          <div className="flex space-x-4">
            <Button
              onClick={handleCopy}
              variant="outline"
              className="flex-1 py-3 rounded-xl"
            >
              <Copy className="w-5 h-5 mr-2" />
              Copiar
            </Button>

            <Button
              className="flex-1 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-xl"
            >
              <QrCode className="w-5 h-5 mr-2" />
              QR Code
            </Button>
          </div>
        </div>

        {/* Share Button */}
        <Button
          onClick={handleShare}
          variant="outline"
          className="w-full py-3 rounded-xl"
        >
          <Share className="w-5 h-5 mr-2" />
          Compartilhar
        </Button>
      </div>
    </div>
  );
}