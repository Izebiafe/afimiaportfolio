const portfolioData = [
  {
    id: '01',
    name: 'Tonia',
    role: 'Developer',
    platform: 'Web',
    year: '2022',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    descriptionlong:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ',
    featuredImage: 'assets/images/tonic1.svg',
    technologies: ['HTML', 'CSS', 'ReactJs'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },
  {
    id: '02',
    name: 'Tonia 2',
    role: 'Developer',
    platform: 'Web',
    year: '2022',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    descriptionlong:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ',
    featuredImage: 'assets/images/tonic2.svg',
    technologies: ['HTML', 'CSS', 'ReactJs'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },
  {
    id: '03',
    name: 'Tonia 3',
    role: 'Developer',
    platform: 'Web',
    year: '2022',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    descriptionlong:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ',
    featuredImage: 'assets/images/poststories.svg',
    technologies: ['HTML', 'CSS', 'ReactJs'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },
  {
    id: '04',
    name: 'Tonia 4',
    role: 'Developer',
    platform: 'Web',
    year: '2022',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    descriptionlong:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ',
    featuredImage: 'assets/images/poststories2.svg',
    technologies: ['HTML', 'CSS', 'ReactJs'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },
];

const modalContainer = document.createElement('div');
const modalOpen = (id) => {
  modalContainer.innerHTML = `
<div class="work">
      <div class="card">
        <img class="card-img" src="${portfolioData[id].featuredImage}" alt="poststories">
        <div class="content">
          <div class="tonic">
            <h3>${portfolioData[id].name}</h3>
            <ul>
              <li><a href="#">Canopy <img src="assets/images/Counter.svg" alt=""></a></li>
              <li><a href="#"> Back End Dev <img src="assets/images/Counter.svg" alt=""></a></li>
              <li><a href="#"> 2015</a></li>
            </ul>
          </div>
          <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
          <ul class="lang">
            <li><a href="#">HTML</a></li>
            <li><a href="#">css</a></li>
            <li><a href="#">Javascript</a></li>
          </ul>
          <button class="btn btn-outline btn-hover mt-15 btn-pressed">See Project</button>
        </div>
      </div>
    </div>
`;
  document.body.appendChild(modalContainer);
};

const modalButton = document.querySelectorAll('[id^="cta"]');
modalButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    modalOpen(index);
  });
});