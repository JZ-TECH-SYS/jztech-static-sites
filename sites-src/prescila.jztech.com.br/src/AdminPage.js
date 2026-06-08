import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Dados de feedbacks de exemplo (mantenha os mesmos aqui)
const allFeedbacks = {
  palestras: [
    { id: 1, text: "A palestra da Prescila foi simplesmente incrível! Muito inspiradora e cheia de insights práticos que posso aplicar no meu dia a dia.", author: "João S." },
    { id: 2, text: "O conteúdo foi apresentado de forma clara e envolvente. Saí do evento com a alma renovada!", author: "Maria F." },
    { id: 3, text: "Recomendo a todos! A energia e a sabedoria da Prescila transformam qualquer ambiente. Gratidão!", author: "Carlos B." },
  ],
  terapias: [
    { id: 1, text: "A terapia com a Prescila foi um divisor de águas na minha vida. O acolhimento e o profissionalismo me ajudaram a superar desafios que pareciam intransponíveis.", author: "Ana C." },
    { id: 2, text: "Sempre me sinto à vontade e segura nas sessões. O processo tem sido incrível e vejo o meu crescimento a cada encontro.", author: "Pedro L." },
    { id: 3, text: "É como encontrar um guia para a alma. A Prescila me ajudou a me reconectar comigo mesma e encontrar a minha força interior.", author: "Fernanda R." },
  ]
};

const AdminPage = () => {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [feedbackType, setFeedbackType] = useState('palestras');
  const [newFeedback, setNewFeedback] = useState({ text: '', author: '' });

  const navigate = useNavigate();
  const CORRECT_PASSWORD = 'sua_senha_secreta'; // Mude esta senha!

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setLoggedIn(true);
    } else {
      alert('Senha incorreta!');
      setPassword('');
    }
  };

  const handleAddFeedback = (e) => {
    e.preventDefault();
    if (newFeedback.text && newFeedback.author) {
      const newId = allFeedbacks[feedbackType].length + 1;
      const newFeedbackItem = { id: newId, ...newFeedback };
      allFeedbacks[feedbackType].push(newFeedbackItem);
      setNewFeedback({ text: '', author: '' });
      alert('Feedback adicionado com sucesso!');
      navigate(`/feedbacks/${feedbackType}`);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Área de Administração</h1>
        
        {!loggedIn ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Digite a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Entrar
            </button>
          </form>
        ) : (
          <form onSubmit={handleAddFeedback} className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Adicionar Novo Feedback</h2>
            
            <select
              value={feedbackType}
              onChange={(e) => setFeedbackType(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="palestras">Palestras</option>
              <option value="terapias">Terapias</option>
            </select>
            
            <textarea
              placeholder="Digite o depoimento..."
              value={newFeedback.text}
              onChange={(e) => setNewFeedback({ ...newFeedback, text: e.target.value })}
              className="w-full px-4 py-2 border rounded-md h-32 resize-none"
            ></textarea>
            
            <input
              type="text"
              placeholder="Autor (Ex: Ana C.)"
              value={newFeedback.author}
              onChange={(e) => setNewFeedback({ ...newFeedback, author: e.target.value })}
              className="w-full px-4 py-2 border rounded-md"
            />
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Adicionar Feedback
            </button>
            <button
              type="button"
              onClick={() => setLoggedIn(false)}
              className="w-full py-2 px-4 mt-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Sair
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminPage;