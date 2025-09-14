import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { DollarSign, PieChart, TrendingDown, Lightbulb } from "lucide-react";

const BudgetBreakdown = () => {
  const budgetCategories = [
    { category: "Accommodation", amount: 15, percentage: 30, color: "bg-primary" },
    { category: "Food & Drinks", amount: 12, percentage: 24, color: "bg-secondary" },
    { category: "Transportation", amount: 10, percentage: 20, color: "bg-accent" },
    { category: "Activities", amount: 8, percentage: 16, color: "bg-tertiary" },
    { category: "Miscellaneous", amount: 5, percentage: 10, color: "bg-muted" },
  ];

  const budgetTips = [
    {
      title: "Sleep Smart",
      tip: "Mix hostels with budget guesthouses. Book dorm beds in party areas, private rooms in quiet zones.",
      savings: "$10-15/night"
    },
    {
      title: "Eat Local",
      tip: "Street food and local markets offer authentic flavors at 1/3 the price of tourist restaurants.",
      savings: "$15-20/day"
    },
    {
      title: "Transport Hacks",
      tip: "Use overnight buses/trains to save on accommodation. Book flights on Tuesday evenings.",
      savings: "$20-50/trip"
    },
    {
      title: "Free Activities",
      tip: "Walking tours, hiking trails, beaches, and local festivals often cost nothing but create lasting memories.",
      savings: "$30-50/day"
    }
  ];

  const destinations = [
    { country: "Vietnam", dailyBudget: 30, duration: "2-3 weeks", highlights: "Street food, Ha Long Bay" },
    { country: "Nepal", dailyBudget: 25, duration: "2-4 weeks", highlights: "Trekking, Temples" },
    { country: "Thailand", dailyBudget: 35, duration: "2-6 weeks", highlights: "Islands, Culture" },
    { country: "Morocco", dailyBudget: 40, duration: "2-3 weeks", highlights: "Sahara, Markets" },
    { country: "Greece", dailyBudget: 45, duration: "2-4 weeks", highlights: "Islands, History" },
    { country: "Eastern Europe", dailyBudget: 38, duration: "3-6 weeks", highlights: "Architecture, Culture" }
  ];

  return (
    <section id="budget" className="py-20 px-4 bg-tertiary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-section">Budget Breakdown & Tips</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparency is key! Here's exactly how we spend our money and the strategies 
            that help us travel longer for less.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Budget Visualization */}
          <Card className="travel-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-6 w-6 text-primary" />
                Daily Budget Breakdown ($50/day average)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {budgetCategories.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{item.category}</span>
                      <span className="font-semibold">${item.amount}/day</span>
                    </div>
                    <Progress value={item.percentage} className="h-3" />
                    <div className="text-xs text-muted-foreground text-right">
                      {item.percentage}% of total budget
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">Pro Tip</span>
                </div>
                <p className="text-sm text-foreground">
                  Our actual spending often comes in under budget thanks to free activities, 
                  cooking our own meals, and strategic accommodation choices!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Money-Saving Tips */}
          <Card className="travel-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-secondary" />
                Top Money-Saving Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {budgetTips.map((tip, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground mb-1">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{tip.tip}</p>
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                      Save {tip.savings}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Destination Budget Guide */}
        <Card className="travel-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-accent" />
              Budget by Destination
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {destinations.map((dest, index) => (
                <div key={index} className="p-4 bg-background rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground">{dest.country}</h4>
                    <Badge className="bg-primary text-white">
                      ${dest.dailyBudget}/day
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Ideal duration: {dest.duration}
                  </p>
                  <p className="text-sm text-foreground">
                    <strong>Highlights:</strong> {dest.highlights}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                All budgets include accommodation, food, transport, and activities for backpacker-style travel
              </p>
              <Badge variant="outline" className="border-primary text-primary">
                Budgets updated monthly based on current prices
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BudgetBreakdown;