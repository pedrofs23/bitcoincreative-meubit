import { ArrowLeft, Mail, Phone, Shield, Settings, LogOut, User, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface ProfileScreenProps {
  onBack: () => void;
  onLogout: () => void;
}

export function ProfileScreen({ onBack, onLogout }: ProfileScreenProps) {
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
        <h1 className="text-lg font-semibold">Perfil</h1>
      </div>

      <div className="px-6 py-8">
        {/* Profile Info */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">João Silva</h2>
          <p className="text-gray-600 text-sm">Membro desde Janeiro 2024</p>
        </div>

        {/* Contact Info Card */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                <Mail className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600 text-sm">joao.silva@email.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                <Phone className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Telefone</p>
                <p className="text-gray-600 text-sm">+55 (11) 99999-9999</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Card */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Segurança</p>
                <p className="text-gray-600 text-sm">2FA ativado</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-orange-500 font-semibold mr-2">Gerenciar</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Settings Card */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                <Settings className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Configurações</p>
                <p className="text-gray-600 text-sm">Preferências do app</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-orange-500 font-semibold mr-2">Abrir</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Logout Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <LogOut className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-red-600">Sair da conta</p>
                <p className="text-gray-600 text-sm">Desconectar do MEUBIT</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}