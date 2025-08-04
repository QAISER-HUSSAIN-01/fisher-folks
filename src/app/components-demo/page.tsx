'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { ToasterProvider, useToaster } from '@/components/ui/Toaster';
import { Alert } from '@/components/ui/Alert';
import { Card } from '@/components/ui/Card';

function ComponentsDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { toast } = useToaster();

  const showToast = (type: 'success' | 'error' | 'warning' | 'info') => {
    toast({
      type,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`,
      message: `This is a ${type} notification message with smooth animations.`,
      duration: 4000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          UI Components Demo
        </h1>

        {/* Button Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Buttons with Animations</h2>
          <Card className="p-6 hover">
            <div className="space-y-6">
              {/* Button Variants */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Variants with Hover Effects</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              {/* Button States */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">States</h3>
                <div className="flex flex-wrap gap-3">
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button onClick={() => showToast('success')}>
                    Show Success Toast
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Modal Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Modal with Smooth Animations</h2>
          <Card className="p-6 hover">
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                Click the button below to see the modal with smooth fade-in and scale animations.
              </p>
              <Button onClick={() => setIsModalOpen(true)}>
                Open Animated Modal
              </Button>
              
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Animated Modal"
                size="md"
              >
                <div className="space-y-4">
                  <p className="text-gray-600">
                    This modal has smooth animations! Notice how it fades in and scales up when opening.
                  </p>
                  <div className="flex justify-end space-x-3">
                    <Button
                      variant="outline"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={() => setIsModalOpen(false)}>
                      Confirm
                    </Button>
                  </div>
                </div>
              </Modal>
            </div>
          </Card>
        </section>

        {/* Toast Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Animated Toasts</h2>
          <Card className="p-6 hover">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button
                variant="outline"
                onClick={() => showToast('success')}
                className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
              >
                Success Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => showToast('error')}
                className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
              >
                Error Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => showToast('warning')}
                className="bg-yellow-50 border-yellow-200 text-yellow-700 hover:bg-yellow-100"
              >
                Warning Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => showToast('info')}
                className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
              >
                Info Toast
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Toasts slide in from the right with staggered animations and hover effects.
            </p>
          </Card>
        </section>

        {/* Alert Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Animated Alerts</h2>
          <Card className="p-6 hover">
            <div className="space-y-4">
              <Alert variant="success" title="Success Alert">
                This alert has smooth hover animations and better styling.
              </Alert>
              
              <Alert variant="error" title="Error Alert">
                This alert has smooth hover animations and better styling.
              </Alert>
              
              <Alert variant="warning" title="Warning Alert">
                This alert has smooth hover animations and better styling.
              </Alert>
              
              <Alert variant="info" title="Info Alert">
                This alert has smooth hover animations and better styling.
              </Alert>

              {showAlert && (
                <Alert
                  variant="success"
                  title="Dismissible Alert"
                  onClose={() => setShowAlert(false)}
                >
                  This alert can be dismissed and has smooth animations.
                </Alert>
              )}
              
              <Button onClick={() => setShowAlert(true)}>
                Show Dismissible Alert
              </Button>
            </div>
          </Card>
        </section>

        {/* Card Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Animated Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Card */}
            <Card hover>
              <Card.Header>
                <h3 className="text-lg font-semibold">Hover Card</h3>
              </Card.Header>
              <Card.Content>
                <p className="text-gray-600">
                  Hover over this card to see the scale and shadow animations.
                </p>
              </Card.Content>
              <Card.Footer>
                <Button size="sm">Action</Button>
              </Card.Footer>
            </Card>

            {/* Card with different padding */}
            <Card padding="lg" hover>
              <Card.Content>
                <h3 className="text-lg font-semibold mb-2">Large Padding</h3>
                <p className="text-gray-600">
                  This card has large padding and hover animations.
                </p>
              </Card.Content>
            </Card>

            {/* Card without border */}
            <Card border={false} shadow="lg" hover>
              <Card.Content>
                <h3 className="text-lg font-semibold mb-2">No Border</h3>
                <p className="text-gray-600">
                  This card has no border but large shadow and hover effects.
                </p>
              </Card.Content>
            </Card>

            {/* Card with image */}
            <Card hover>
              <Card.Content>
                <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mb-3"></div>
                <h3 className="text-lg font-semibold mb-2">Card with Image</h3>
                <p className="text-gray-600">
                  Cards can contain images, forms, or any content with animations.
                </p>
              </Card.Content>
            </Card>

            {/* Interactive Card */}
            <Card hover>
              <Card.Header>
                <h3 className="text-lg font-semibold">Interactive Card</h3>
              </Card.Header>
              <Card.Content>
                <p className="text-gray-600 mb-3">
                  Click the button to see a toast notification.
                </p>
                <Button
                  size="sm"
                  onClick={() => showToast('info')}
                >
                  Show Toast
                </Button>
              </Card.Content>
            </Card>

            {/* Stats Card */}
            <Card hover>
              <Card.Content>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1,234</div>
                  <div className="text-sm text-gray-500">Total Sales</div>
                  <div className="text-xs text-green-500 mt-1">+12% from last month</div>
                </div>
              </Card.Content>
            </Card>
          </div>
        </section>

        {/* Animation Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Animation Showcase</h2>
          <Card className="p-6 hover">
            <Card.Header>
              <h3 className="text-lg font-semibold">Try All Animations</h3>
            </Card.Header>
            <Card.Content>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Test all the animations and interactions:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => {
                      showToast('success');
                      setTimeout(() => setIsModalOpen(true), 500);
                    }}
                  >
                    Toast + Modal Sequence
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      showToast('warning');
                      setShowAlert(true);
                    }}
                  >
                    Toast + Alert
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      showToast('error');
                      showToast('info');
                      showToast('success');
                    }}
                  >
                    Multiple Toasts
                  </Button>
                </div>
              </div>
            </Card.Content>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default function ComponentsDemoPage() {
  return (
    <ToasterProvider>
      <ComponentsDemo />
    </ToasterProvider>
  );
} 