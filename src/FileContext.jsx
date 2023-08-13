import { createContext, useContext,  useState} from "react";

const FileContext = createContext();

export function FileProvider({ children }) {
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <FileContext.Provider value={{ selectedFile, setSelectedFile }}>
            {children}
        </FileContext.Provider>
    )
}

export function useFileContext(){
    return useContext(FileContext);
}