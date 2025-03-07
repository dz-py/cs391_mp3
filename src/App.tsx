import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Skills from './pages/Skills';
import Projects from './pages/Projects';


function Root(){
	return (
		<>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/education" element={<Education />} />
			<Route path="/experience" element={<Experience />} />
			<Route path="/achievements" element={<Achievements />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/projects" element={<Projects />} />
      	</Routes>
		</>
	)
}

const router = createBrowserRouter(
	[
		{path: '*', Component: Root}
	]
)

export default function App() {
	return <RouterProvider router={router}/>
}