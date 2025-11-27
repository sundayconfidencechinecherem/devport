import Button from '@/components/atoms/button';

function page() {
  return (
   <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Testing Our Button Component</h1>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Variants:</h2>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        
        <h2 className="text-lg font-semibold mt-6">Sizes:</h2>
        <Button size="sm">Small Button</Button>
        <Button size="md">Medium Button</Button>
        <Button size="lg">Large Button</Button>
        
        <h2 className="text-lg font-semibold mt-6">States:</h2>
        <Button isLoading>Loading Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button fullWidth>Full Width Button</Button>
      </div>
    </div>
  )
}

export default page;