import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import { Button } from './components/ui/button.jsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card.jsx';

/**
 * @fileoverview Landing page for FoodPlana featuring shadcn/ui components.
 */
function App() {
  /**
   * Handles the primary call to action click by announcing the interaction.
   *
   * @param {React.MouseEvent<HTMLButtonElement>} event - The originating click event.
   * @returns {void}
   */
  const handleGetStarted = (event) => {
    event.preventDefault();
    window.alert('Meal planning journeys start here!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <header className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Leaf className="h-8 w-8" aria-hidden="true" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Plan flavorful meals with confidence
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            FoodPlana helps you balance nutrition, budget, and taste with curated recipe
            suggestions and smart grocery lists powered by shadcn/ui components.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button className="gap-2" onClick={handleGetStarted}>
            Get started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button variant="outline">Browse sample plans</Button>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Weekly plan preview</CardTitle>
            <CardDescription>See how balanced each meal is at a glance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-left">
            <div className="flex items-center justify-between rounded-lg border bg-muted/40 px-4 py-3">
              <div>
                <p className="font-medium">Mediterranean Monday</p>
                <p className="text-sm text-muted-foreground">Salmon bowl · 620 kcal</p>
              </div>
              <span className="text-sm font-semibold text-primary">Ready</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border bg-muted/40 px-4 py-3">
              <div>
                <p className="font-medium">Veggie Tuesday</p>
                <p className="text-sm text-muted-foreground">Quinoa salad · 540 kcal</p>
              </div>
              <span className="text-sm font-semibold text-primary">Prep</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border bg-muted/40 px-4 py-3">
              <div>
                <p className="font-medium">Fusion Friday</p>
                <p className="text-sm text-muted-foreground">Tofu ramen · 680 kcal</p>
              </div>
              <span className="text-sm font-semibold text-primary">Shopping</span>
            </div>
          </CardContent>
          <CardFooter className="justify-end gap-3">
            <Button variant="ghost">View calendar</Button>
            <Button variant="secondary">Generate new plan</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why FoodPlana?</CardTitle>
            <CardDescription>Designed to make healthy eating effortless.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-left">
            <FeatureRow title="Smart suggestions" description="Personalized recipes based on dietary goals." />
            <FeatureRow title="Budget aware" description="Auto-adjusts grocery lists to stay within budget." />
            <FeatureRow title="Team friendly" description="Share plans with family or roommates instantly." />
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="outline" className="w-full">
              Explore all benefits
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}

/**
 * Displays a labeled feature row inside the feature card.
 *
 * @param {{ title: string; description: string }} props - Feature copy to render.
 * @returns {JSX.Element} The formatted feature item.
 */
function FeatureRow({ title, description }) {
  return (
    <div className="space-y-1 rounded-lg border border-dashed border-primary/20 bg-background/60 p-4 shadow-sm">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default App;
