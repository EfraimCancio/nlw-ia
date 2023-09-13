import { Label } from "@radix-ui/react-label";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Slider } from "@radix-ui/react-slider";
import { FileVideo, Github, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { SelectItem } from "./components/ui/select";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";


export function App() {
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1>Efras.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com ❤️ no NLW pelo Efraim
          </span>

          <Separator orientation="vertical" className="h-6"/> 
          
          <Button variant="secondary">
            <Github className="w-4 h-4 mr-2"/>
            GitHub
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-nome p-4 leading-relaxed" 
              placeholder="Inclua o prompt para a IA"
            />
            <Textarea
              className="resize-nome p-4 leading-relaxed" 
              placeholder="Resultado gerado pela IA"
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: voçê pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteudo da transcrição do vídeo selecionado.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label 
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5" 
            >
              <FileVideo className="w-4 h-4" />
              Selecione um Video
            </label>
              
            <input type="file" id="video" accept="video/mp4" className="sr-only"/>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="trancripition_prompt">Prompt de transcrição</Label>
              <Textarea 
                id="trancripition_prompt" 
                className="h-20 leading-relaxed resize-none" 
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por virgula ( , )"
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar Vídeo
              <Upload className="w-4 h-4 ml-2"/>
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2 ">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..."/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">Título do Youtube</SelectItem>
                  <SelectItem value="gpt3.5">Descrição do Youtube</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="space-y-2 ">
              <Label>Modelo</Label>
              <Select defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Voçe poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider defaultValue={[33]} min={10} max={100} step={1} />

              <span className="block text-xs text-muted-foreground italic">
                Valores mais altos tendem a deixar o resultado mais criativo e com possiveis erros
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2"/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}

