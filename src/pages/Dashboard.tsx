import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Activity, Users, BarChart3 } from "lucide-react";

const Dashboard = () => {
  const cryptoData = [
    { name: "Bitcoin", symbol: "BTC", price: "$43,256.00", change: "+2.34%", trending: "up", marketCap: "$845.2B" },
    { name: "Ethereum", symbol: "ETH", price: "$2,567.89", change: "-1.23%", trending: "down", marketCap: "$308.5B" },
    { name: "Cardano", symbol: "ADA", price: "$0.4567", change: "+5.67%", trending: "up", marketCap: "$16.1B" },
    { name: "Solana", symbol: "SOL", price: "$98.45", change: "+3.21%", trending: "up", marketCap: "$42.8B" },
  ];

  const portfolioMetrics = [
    { title: "Total Portfolio Value", value: "$12,543.67", change: "+8.45%", icon: DollarSign, color: "text-green-500" },
    { title: "24h Change", value: "+$1,234.56", change: "+5.67%", icon: TrendingUp, color: "text-green-500" },
    { title: "Active Positions", value: "8", change: "+2", icon: Activity, color: "text-blue-500" },
    { title: "Profit/Loss", value: "+$2,456.78", change: "+12.34%", icon: BarChart3, color: "text-green-500" },
  ];

  const recentActivity = [
    { action: "Bought", crypto: "BTC", amount: "0.1", price: "$43,200", time: "2 hours ago", type: "buy" },
    { action: "Sold", crypto: "ETH", amount: "2.5", price: "$2,580", time: "4 hours ago", type: "sell" },
    { action: "Alert", crypto: "ADA", amount: "Price target reached", price: "$0.45", time: "6 hours ago", type: "alert" },
  ];

  return (
    <div className="bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Monitor your crypto portfolio and market trends</p>
        </div>

        {/* Portfolio Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {portfolioMetrics.map((metric, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className={`p-2 rounded-lg bg-primary/10`}>
                  <metric.icon className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="flex items-center space-x-1 text-xs">
                  <span className={metric.color}>
                    {metric.change}
                  </span>
                  <span className="text-muted-foreground">from yesterday</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Crypto Prices */}
          <Card className="lg:col-span-2 border-border animate-fade-in">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Top Cryptocurrencies
              </CardTitle>
              <CardDescription>Real-time price tracking and market data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cryptoData.map((crypto, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/30 transition-all duration-300 hover-scale">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {crypto.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{crypto.name}</p>
                        <p className="text-sm text-muted-foreground">{crypto.symbol} • {crypto.marketCap}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{crypto.price}</p>
                      <div className="flex items-center justify-end space-x-1">
                        {crypto.trending === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        )}
                        <Badge variant={crypto.trending === "up" ? "default" : "destructive"} className="text-xs">
                          {crypto.change}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Market Insights */}
          <Card className="border-border animate-fade-in">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Activity className="mr-2 h-5 w-5 text-primary" />
                Market Insights
              </CardTitle>
              <CardDescription>AI-powered predictions and analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg transition-all hover:bg-green-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="font-semibold text-green-500">Bullish Signal</span>
                </div>
                <p className="text-sm text-foreground">Bitcoin showing strong upward momentum. Consider accumulating on dips.</p>
              </div>
              
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg transition-all hover:bg-yellow-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Activity className="h-4 w-4 text-yellow-500" />
                  <span className="font-semibold text-yellow-500">Neutral</span>
                </div>
                <p className="text-sm text-foreground">Ethereum consolidating in current range. Watch for breakout signals.</p>
              </div>

              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg transition-all hover:bg-blue-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <BarChart3 className="h-4 w-4 text-blue-500" />
                  <span className="font-semibold text-blue-500">Market Update</span>
                </div>
                <p className="text-sm text-foreground">Market volatility expected to increase over the next 24-48 hours.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border-border animate-fade-in">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <Users className="mr-2 h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your latest trades and portfolio changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <Badge 
                      variant={
                        activity.type === "buy" ? "default" : 
                        activity.type === "sell" ? "destructive" : 
                        "secondary"
                      }
                      className="min-w-[60px] justify-center"
                    >
                      {activity.action}
                    </Badge>
                    <div>
                      <p className="font-medium text-foreground">{activity.crypto} - {activity.amount}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-foreground">{activity.price}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;