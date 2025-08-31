import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import heroImage from "@/assets/hero-psychology.jpg"
import { Brain, Target, Zap, BookOpen, Award, Users, ArrowRight, Check, Play, Sparkles } from "lucide-react"

const Index = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: Brain,
      title: "IA Avançada",
      description: "ChatGPT avalia suas respostas discursivas com feedback personalizado"
    },
    {
      icon: Target,
      title: "Sistema Adaptativo", 
      description: "Questões se ajustam ao seu nível de conhecimento automaticamente"
    },
    {
      icon: Zap,
      title: "Gamificação",
      description: "Pontos, badges e streaks para manter você motivado"
    },
    {
      icon: BookOpen,
      title: "Conteúdo Curado",
      description: "Questões baseadas em literatura científica atualizada"
    },
    {
      icon: Award,
      title: "Certificação",
      description: "Relatórios detalhados do seu progresso e competências"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Compare seu desempenho com outros estudantes"
    }
  ]

  const stats = [
    { value: "10k+", label: "Estudantes Ativos" },
    { value: "500+", label: "Questões Disponíveis" },
    { value: "15", label: "Módulos de Psicologia" },
    { value: "95%", label: "Taxa de Satisfação" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">PsychoGame AI</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate("/dashboard")}>
                Entrar
              </Button>
              <Button variant="hero" onClick={() => navigate("/dashboard")}>
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <Badge className="bg-accent-light text-accent-foreground">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Powered by AI
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Domine a 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Psicologia</span> 
                  com IA
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Sistema gamificado de aprendizagem que mede e desenvolve seu conhecimento em psicologia 
                  através de questões adaptativas e correção automática por inteligência artificial.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="hero"
                  onClick={() => navigate("/quiz")}
                  className="text-lg px-8 py-4 h-auto"
                >
                  <Play className="w-5 h-5" />
                  Começar Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/dashboard")}
                  className="text-lg px-8 py-4 h-auto"
                >
                  Ver Dashboard
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-secondary" />
                  Sem mensalidade
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-secondary" />
                  Feedback instantâneo
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-secondary" />
                  Conteúdo científico
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-3xl" />
              <img 
                src={heroImage}
                alt="Aprendizagem de Psicologia com IA"
                className="relative rounded-3xl shadow-strong w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Por que escolher o PsychoGame AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma plataforma completa que combina gamificação, inteligência artificial e 
              metodologia científica para acelerar seu aprendizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Como funciona?
            </h2>
            <p className="text-xl text-muted-foreground">
              Simples, eficaz e baseado em ciência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Responda Questões</h3>
              <p className="text-muted-foreground">
                5 questões objetivas + 1 discursiva por bloco, adaptadas ao seu nível
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-secondary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Receba Feedback</h3>
              <p className="text-muted-foreground">
                IA analisa suas respostas e fornece feedback personalizado e detalhado
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Evolua Continuamente</h3>
              <p className="text-muted-foreground">
                Ganhe pontos, badges e acompanhe seu progresso em relatórios detalhados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-hero text-primary-foreground border-0 shadow-strong">
            <CardContent className="p-12 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Pronto para transformar seu aprendizado?
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Junte-se a milhares de estudantes que já estão dominando a psicologia 
                  com nossa plataforma inteligente.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="glass"
                  onClick={() => navigate("/quiz")}
                  className="text-lg px-8 py-4 h-auto"
                >
                  <Play className="w-5 h-5" />
                  Experimentar Grátis
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/dashboard")}
                  className="text-lg px-8 py-4 h-auto border-white/20 text-white hover:bg-white/10"
                >
                  Ver Demonstração
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">PsychoGame AI</span>
            </div>
            
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © 2024 PsychoGame AI. Transformando educação com inteligência artificial.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
