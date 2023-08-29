function cadastrarVoluntario(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var age = document.getElementById('age').value;
    var neighborhood = document.getElementById('neighborhood').value;
    var river = document.getElementById('river').value;
    var observation = document.getElementById('observation').value;

    // Cria um objeto para armazenar as informações do voluntário
    var volunteer = {
        name: name,
        email: email,
        phone: phone,
        age: age,
        neighborhood: neighborhood,
        river: river,
        observation: observation
    };

    // Verifica se já existe uma lista de voluntários no LocalStorage
    var volunteersList = localStorage.getItem('volunteersList');
    if (!volunteersList) {
        volunteersList = []; // Se não existir, cria uma nova lista vazia
    } else {
        volunteersList = JSON.parse(volunteersList); // Se existir, converte para objeto
    }

    // Adiciona o novo voluntário à lista
    volunteersList.push(volunteer);

    // Salva a lista de voluntários atualizada no LocalStorage
    localStorage.setItem('volunteersList', JSON.stringify(volunteersList));

    // Limpa os campos do formulário após o cadastro
    document.getElementById('volunteerForm').reset();

    alert('Voluntário cadastrado com sucesso!');
}