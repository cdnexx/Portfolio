import Navbar  from './components/Navbar'
import Layout from './components/Layout'
import Title from './components/Title'
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div>
      <Navbar/>
      <Layout>
        <Title>About</Title>
        <Paragraph>
          I started studying at university in 2020 where I learned to program mainly in Python, but I also used languages like Java, Javascript and C++. In this process I discovered how much I enjoy programming so I have not stopped learning and seeking to familiarize myself with other languages and new technologies looking forward to test my knowledge in projects that allow me to improve my skills.
        </Paragraph>
        <Title>Projects</Title>
        <Paragraph>
          I started studying at university in 2020 where I learned to program mainly in Python, but I also used languages like Java, Javascript and C++. In this process I discovered how much I enjoy programming so I have not stopped learning and seeking to familiarize myself with other languages and new technologies looking forward to test my knowledge in projects that allow me to improve my skills.
        </Paragraph>
        <Title>Skills</Title>
        <Paragraph>
          {/* Skill card component */}
          <ul>
            <li>React</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
        </Paragraph>

      </Layout>
    </div>
  );
}

export default App;
