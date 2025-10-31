import * as React from 'react';
import { cn } from '../../lib/utils.js';

/**
 * Provides a styled container that mimics a card layout.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The card props.
 * @returns {JSX.Element} The rendered card wrapper.
 */
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('rounded-xl border bg-card text-card-foreground shadow', className)} {...props} />
));
Card.displayName = 'Card';

/**
 * Renders the card header section.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The header props.
 * @returns {JSX.Element} The rendered header.
 */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

/**
 * Displays the main card content area.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The content props.
 * @returns {JSX.Element} The rendered content section.
 */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

/**
 * Shows supplemental text inside a card.
 *
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - The description props.
 * @returns {JSX.Element} The rendered description.
 */
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

/**
 * Presents a card footer for actions.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The footer props.
 * @returns {JSX.Element} The rendered footer.
 */
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

/**
 * Highlights the card title.
 *
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props - The title props.
 * @returns {JSX.Element} The rendered title.
 */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
