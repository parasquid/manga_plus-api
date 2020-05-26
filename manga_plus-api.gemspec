# frozen_string_literal: true

lib = File.expand_path('lib', __dir__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'manga_plus/api/version'

Gem::Specification.new do |spec|
  spec.name          = 'manga_plus-api'
  spec.version       = MangaPlus::Api::VERSION
  spec.authors       = ['parasquid']
  spec.email         = ['tristan.gomez@gmail.com']

  spec.summary       = 'Thin API layer for the MangaPlus manga site'
  # spec.description   = 'Write a longer description or delete this line.'
  spec.homepage      = 'https://github.com/parasquid/manga_plus-api'
  spec.licenses    = ['GPL-3.0-or-later']

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    # spec.metadata['allowed_push_host'] = "TODO: Set to 'http://mygemserver.com'"

    spec.metadata['homepage_uri'] = spec.homepage
    spec.metadata['source_code_uri'] = 'https://github.com/parasquid/manga_plus-api'
    spec.metadata['changelog_uri'] = 'https://github.com/parasquid/manga_plus-api/commits/master'
  else
    raise 'RubyGems 2.0 or newer is required to protect against ' \
      'public gem pushes.'
  end

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = 'exe'
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ['lib']

  spec.add_dependency 'google-protobuf', '~> 3.12.0'
  spec.add_dependency 'httparty', '~> 0.18.0'

  spec.add_development_dependency 'bundler', '~> 1.17'
  spec.add_development_dependency 'byebug', '~> 11.1.3'
  spec.add_development_dependency 'rake', '~> 10.0'
  spec.add_development_dependency 'rspec', '~> 3.0'
  spec.add_development_dependency 'rubocop', '~> 0.84'
end
