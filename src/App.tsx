import './App.css'
import Book from './Book.tsx';

function App() {

    return (
        <>
            <div
                className="flex justify-center items-center p-4 sm:p-8 w-screen h-screen overflow-hidden">
                <div className="w-full h-full bg-red-50 flex justify-center items-center">
                    <Book/>
                </div>
            </div>
        </>
    )
}

export default App
