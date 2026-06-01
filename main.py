from langchain_ollama import ChatOllama 
from langchain_openrouter import ChatOpenRouter

from dotenv import load_dotenv
import os 
load_dotenv()



def main():
    model = ChatOpenRouter(
    model="qwen/qwen3-coder:free",
    api_key= os.getenv("OPENROUTER_API_KEY")
    
)
    
    res = model.invoke("hii")
    print(res)



if __name__ == "__main__":
    main()
