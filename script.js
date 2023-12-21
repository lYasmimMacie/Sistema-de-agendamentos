function enviarMensagem() {
    const dataSelecionada = document.getElementById('data').value;
    const horaSelecionada = document.getElementById('hora').value;
  
    if (!dataSelecionada || !horaSelecionada) {
      alert('Por favor, selecione data e hora para agendar o serviço.');
      return;
    }
  
    const mensagem = `Olá! Agendei um serviço para ${dataSelecionada} às ${horaSelecionada}.`;
  
    // número do WhatsApp do estabelecimento
    const numeroEstabelecimento = 'seu_numero';
    const linkWhatsapp = `https://api.whatsapp.com/send?phone=${558199223190}&text=${encodeURIComponent(mensagem)}`;
  
    window.open(linkWhatsapp, '_blank');
  }
  