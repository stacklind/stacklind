using Microsoft.EntityFrameworkCore;
using stacklind.Server.Models;

namespace stacklind.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        { 

        }

        public DbSet<Project> Projects => Set<Project>();
    }
}
