import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { User, Mail } from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');

  const handleEmailLogin = () => {
    if (email) {
      onLogin();
    }
  };

  const handleGoogleLogin = () => {
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center mr-2">
              <span className="text-white text-lg font-bold">₿</span>
            </div>
            <span className="text-2xl font-bold text-black">MEUBIT</span>
          </div>
          <p className="text-gray-600 text-sm">A melhor carteira de Bitcoin do Brasil!</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Bem-vindo</h1>
            <p className="text-gray-600">Faça login ou cadastre-se</p>
          </div>

          <div className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 py-3 bg-gray-50 border-0 rounded-xl"
              />
            </div>

            {/* Email Continue Button */}
            <Button 
              onClick={handleEmailLogin}
              className="w-full py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-xl"
            >
              Continuar com Email
            </Button>

            {/* Divider */}
            <div className="text-center py-2">
              <span className="text-gray-400 text-sm">OU</span>
            </div>

            {/* Google Login Button */}
            <Button 
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full py-3 border-gray-200 rounded-xl"
            >
              <User className="w-5 h-5 mr-2" />
              Continuar com Google
            </Button>

            {/* Passkey Link */}
            <div className="text-center pt-4">
              <button className="text-orange-500 text-sm underline">
                Tenho uma Passkey
              </button>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Protegido por <span className="font-semibold">privy</span>
          </p>
        </div>
      </div>
    </div>
  );
}