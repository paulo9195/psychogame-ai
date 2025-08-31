import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProgressBar } from "@/components/ui/progress-bar"
import { BadgeGrid, BadgeItem } from "@/components/ui/badge-system"
import { Brain, BookOpen, Target, Zap, Trophy, Star, Play, BarChart3, Settings } from "lucide-react"

const Dashboard = () => {
  const [userStats] = useState({
    totalPoints: 2840,
    currentStreak: 7,
    completedBlocks: 23,
    accuracy: 78,
    level: 5,
    nextLevelPoints: 3000
  })

  const badges = [
    {
      type: "streak" as const,
      title: "Sequência de Fogo",
      description: "7 dias consecutivos",
      earned: true,
      animated: true
    },
    {
      type: "mastery" as const,
      title: "Mestre Behaviorista",
      description: "90% de acerto em Behaviorismo",
      earned: true
    },
    {
      type: "progress" as const,
      title: "Estudante Dedicado",
      description: "Complete 30 blocos",
      progress: 23,
      maxProgress: 30
    },
    {
      type: "achievement" as const,
      title: "Primeira Conquista",
      description: "Complete seu primeiro bloco",
      earned: true
    }
  ]

  const modules = [
    {
      id: 1,
      title: "Behaviorismo",
      description: "Condicionamento clássico e operante, leis de aprendizagem",
      progress: 85,
      totalBlocks: 12,
      completedBlocks: 10,
      difficulty: "Médio",
      color: "bg-gradient-primary"
    },
    {
      id: 2,
      title: "Psicologia Cognitiva",
      description: "Processamento de informação, memória, atenção",
      progress: 45,
      totalBlocks: 15,
      completedBlocks: 7,
      difficulty: "Avançado",
      color: "bg-gradient-secondary"
    },
    {
      id: 3,
      title: "Psicologia Social",
      description: "Influência social, atitudes, preconceito",
      progress: 0,
      totalBlocks: 10,
      completedBlocks: 0,
      difficulty: "Básico",
      color: "bg-gradient-accent"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">PsychoGame AI</h1>
                <p className="text-sm text-muted-foreground">Seu parceiro de aprendizagem</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-accent-light rounded-full">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent-foreground">{userStats.totalPoints}</span>
              </div>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            Bem-vindo de volta! 👋
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continue sua jornada de aprendizagem. Você está indo muito bem!
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{userStats.totalPoints}</h3>
              <p className="text-sm text-muted-foreground">Pontos Totais</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{userStats.currentStreak}</h3>
              <p className="text-sm text-muted-foreground">Dias Consecutivos</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{userStats.accuracy}%</h3>
              <p className="text-sm text-muted-foreground">Taxa de Acerto</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{userStats.completedBlocks}</h3>
              <p className="text-sm text-muted-foreground">Blocos Concluídos</p>
            </CardContent>
          </Card>
        </div>

        {/* Progress to Next Level */}
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Progresso do Nível
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Nível {userStats.level}</span>
              <span>Nível {userStats.level + 1}</span>
            </div>
            <ProgressBar
              value={userStats.totalPoints}
              max={userStats.nextLevelPoints}
              variant="glow"
              size="lg"
              animated
            />
            <p className="text-center text-sm text-muted-foreground">
              Faltam {userStats.nextLevelPoints - userStats.totalPoints} pontos para o próximo nível
            </p>
          </CardContent>
        </Card>

        {/* Modules Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Módulos de Aprendizagem</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Card key={module.id} className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 ${module.color} rounded-xl flex items-center justify-center`}>
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                      {module.difficulty}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">{module.title}</h4>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{module.completedBlocks}/{module.totalBlocks} blocos</span>
                    </div>
                    <ProgressBar
                      value={module.progress}
                      max={100}
                      variant={module.progress === 0 ? "default" : "success"}
                    />
                  </div>

                  <Button 
                    className="w-full group-hover:scale-105 transition-transform"
                    variant={module.progress === 0 ? "hero" : "default"}
                  >
                    <Play className="w-4 h-4" />
                    {module.progress === 0 ? "Começar" : "Continuar"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Badges Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Suas Conquistas</h3>
          <BadgeGrid badges={badges} columns={2} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard