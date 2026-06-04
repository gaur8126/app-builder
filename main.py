from langchain_deepseek import ChatDeepSeek
from langchain_nvidia_ai_endpoints import ChatNVIDIA
from pydantic import BaseModel, Field
from langchain_ollama import ChatOllama

from dotenv import load_dotenv
import os

load_dotenv()


class Joke(BaseModel):
    '''Joke to tell user.'''

    setup: str = Field(description="The setup of the joke")
    punchline: str = Field(description="The punchline to the joke")
    rating: int | None = Field(description="How funny the joke is, from 1 to 10")


def main():

    # model = ChatOllama(model="qwen2.5:1.5b")
    model = ChatNVIDIA(
        # model="z-ai/glm-5.1"
        # model="deepseek-ai/deepseek-v4-flash"
        # model =  "mistralai/mistral-medium-3.5-128b" <
        # model =  "qwen/qwen3-coder-480b-a35b-instruct"
        #  model="stepfun-ai/step-3.5-flash"
         model="deepseek-ai/deepseek-v4-flash"
    )

    structured_model = model.with_structured_output(Joke)
    res = structured_model.invoke("Tell me a joke about Donald Trump")
    print(res.setup)
    print(res.punchline)
    print(res.rating)

if __name__ == "__main__":
    main()
