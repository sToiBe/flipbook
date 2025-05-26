import './App.css'
import Book from './Book.tsx';

function App() {

    return (
        <>
            <div
                className="flex justify-center items-center px-2 sm:p-8 w-screen h-screen overflow-hidden">
                <div className="w-full h-full flex justify-center items-center">
                    <Book/>
                </div>
            </div>
        </>
    )
}

export default App
